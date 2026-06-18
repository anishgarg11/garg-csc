import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QRGenerator.css";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const qrRef = useRef();

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "garg-csc-qr.png";
    link.click();
  };

  return (
    <section className="qr-page">
      <div className="qr-card">
        <h1>🔳 QR Code Generator</h1>

        <p>
          Generate QR Codes for Website, UPI, WhatsApp, Contact Details and
          more.
        </p>

        <input
          type="text"
          placeholder="Enter URL, Text, UPI ID or Phone Number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="qr-input"
        />

        {text && (
          <>
            <div className="qr-preview" ref={qrRef}>
              <QRCodeCanvas
                value={text}
                size={250}
                includeMargin
              />
            </div>

            <button
              className="download-btn"
              onClick={downloadQR}
            >
              ⬇ Download QR
            </button>
          </>
        )}
      </div>
    </section>
  );
}