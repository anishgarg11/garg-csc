import { useState, useRef, useEffect } from 'react'
import './ChatWidget.css'

// ✅ Apna server URL yahan set karo
// Development mein: 'http://localhost:5000'
// Production mein: apna deployed server URL
const SERVER_URL = 'https://garg-csc-backend.onrender.com'

const QUICK_REPLIES = [
  { label: '🪪 Aadhaar',    text: 'Aadhaar Card services' },
  { label: '🗂️ PAN Card',   text: 'PAN Card services' },
  { label: '📜 Certificate', text: 'Certificate services' },
  { label: '👨‍👩‍👧 Family ID',  text: 'Family ID services' },
  { label: '🏥 Ayushman',   text: 'Ayushman Bharat' },
  { label: '💡 Bill Pay',   text: 'Bill payments' },
]

function getTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

export default function ChatWidget() {
  const [open, setOpen]       = useState(false)
  const [bubble, setBubble]   = useState(false)
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [showQR, setShowQR]   = useState(true)
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: '👋 Hello! Welcome to <strong>Garg Common Service Center</strong>, Faridabad.<br/><br/>How can I assist you today? You can ask about any of our services.',
      time: getTime(),
    },
  ])

  const endRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setBubble(true), 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const addMsg = (text, role) => {
    setMessages(prev => [...prev, { role, text, time: getTime() }])
  }

  const sendMessage = async (text) => {
    const msg = text || input.trim()
    if (!msg || loading) return

    setInput('')
    setLoading(true)
    setShowQR(false)
    addMsg(msg, 'user')

    try {
      const res = await fetch(`${SERVER_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      })

      if (!res.ok) throw new Error('Server error')

      const data = await res.json()
      const reply = data.reply || 'Sorry, something went wrong. Please call us.'

      // Convert newlines to <br/> for display
      const formatted = reply
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br/>')

      addMsg(formatted, 'bot')
    } catch (err) {
      addMsg(
        '⚠️ Unable to connect. Please call us at <strong>+91 7217687044</strong> or visit our center.',
        'bot'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {bubble && !open && (
        <div className="chat-bubble">Ask us anything!</div>
      )}

      <button
        className="chat-toggle"
        onClick={() => { setOpen(o => !o); setBubble(false) }}
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">🤖</div>
            <div className="chat-header-info">
              <h4>Garg CSC Assistant</h4>
              <p><span className="online-dot" /> Online — replies instantly</p>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                <span dangerouslySetInnerHTML={{ __html: m.text }} />
                <span className="msg-time">{m.time}</span>
              </div>
            ))}
            {loading && (
              <div className="typing-indicator">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            )}
            <div ref={endRef} />
          </div>

          {showQR && (
            <div className="quick-replies">
              {QUICK_REPLIES.map((q) => (
                <button key={q.label} className="qr-btn" onClick={() => sendMessage(q.text)}>
                  {q.label}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-area">
            <input
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type your question..."
              maxLength={300}
            />
            <button
              className="chat-send"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
