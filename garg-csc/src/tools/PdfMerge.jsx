import { useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";
import "./PdfMerge.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const HISTORY_KEY = "gargcsc_pdf_merge_history";

export default function PdfMerge() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  });

  const getThumbnail = async (file) => {
    try {
      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 0.35 });
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      return {
        thumbnail: canvas.toDataURL("image/png"),
        pages: pdf.numPages,
        protected: false,
      };
    } catch {
      return {
        thumbnail: null,
        pages: 0,
        protected: true,
      };
    }
  };

  const handleFiles = async (selectedFiles) => {
    const pdfFiles = Array.from(selectedFiles).filter(
      (file) => file.type === "application/pdf"
    );

    const mappedFiles = [];

    for (const file of pdfFiles) {
      const info = await getThumbnail(file);

      mappedFiles.push({
        id: crypto.randomUUID(),
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2),
        pages: info.pages,
        thumbnail: info.thumbnail,
        protected: info.protected,
      });
    }

    setFiles((prev) => [...prev, ...mappedFiles]);
  };

  const removeFile = (id) => {
    setFiles(files.filter((item) => item.id !== id));
  };

  const moveFile = (index, direction) => {
    const updated = [...files];

    if (direction === "up" && index > 0) {
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
    }

    if (direction === "down" && index < updated.length - 1) {
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    }

    setFiles(updated);
  };

  const saveHistory = (filename, totalPages, totalSize) => {
    const item = {
      filename,
      totalPages,
      totalSize,
      date: new Date().toLocaleString(),
    };
    
        const updated = [item, ...history].slice(0, 5);
        setHistory(updated);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      };


const removeHistoryItem = (index) => {
  const updated = history.filter((_, i) => i !== index);

  setHistory(updated);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
};

const clearHistory = () => {
  if (!window.confirm("Clear all download history?")) return;

  setHistory([]);
  localStorage.removeItem(HISTORY_KEY);
};


  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    if (files.some((file) => file.protected)) {
      alert("Password protected PDF detected. Please remove it before merging.");
      return;
    }

    try {
      setLoading(true);
      setProgress(10);

      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const item = files[i];
        const arrayBuffer = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);

        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        copiedPages.forEach((page) => mergedPdf.addPage(page));

        setProgress(Math.round(((i + 1) / files.length) * 80));
      }

      const mergedBytes = await mergedPdf.save();
      setProgress(95);

      const blob = new Blob([mergedBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const now = new Date();
      const filename = `doc_gargcsc_${now.getFullYear()}${String(
        now.getMonth() + 1
      ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}_${String(
        now.getHours()
      ).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}.pdf`;

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();

      URL.revokeObjectURL(url);

      const totalPages = files.reduce((sum, item) => sum + item.pages, 0);
      const totalSize = files
        .reduce((sum, item) => sum + Number(item.size), 0)
        .toFixed(2);

      saveHistory(filename, totalPages, totalSize);
      setProgress(100);
    } catch (error) {
      console.error(error);
      alert("PDF merge failed. Please try again.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 800);
    }
  };

  const totalPages = files.reduce((sum, item) => sum + item.pages, 0);
  const totalSize = files
    .reduce((sum, item) => sum + Number(item.size), 0)
    .toFixed(2);

  return (
    <section className="pdf-merge-page">
      <div className="pdf-merge-header">
        <span>Professional PDF Tool</span>
        <h1>Merge PDF Files</h1>
        <p>
          Combine multiple PDF files with page count, thumbnails, file ordering,
          progress tracking and secure document validation.
        </p>
      </div>

      <div className="pdf-merge-container">
        <div
          className="upload-box"
          onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            multiple
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="upload-icon">📑</div>
          <h2>Select PDF Files</h2>
          <p>Drag & drop PDFs here or click to browse</p>
          <button type="button">Choose Files</button>
        </div>

        {files.length > 0 && (
          <>
            <div className="pdf-info-panel">
              <div>
                <strong>{files.length}</strong>
                <span>Files</span>
              </div>
              <div>
                <strong>{totalPages}</strong>
                <span>Total Pages</span>
              </div>
              <div>
                <strong>{totalSize} MB</strong>
                <span>Total Size</span>
              </div>
              <div>
                <strong>doc_gargcsc</strong>
                <span>Output Name</span>
              </div>
            </div>

            {loading && (
              <div className="progress-box">
                <div className="progress-text">
                  <span>Merging PDFs...</span>
                  <strong>{progress}%</strong>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="file-panel">
              <div className="file-panel-header">
                <h3>Selected Files</h3>
                <button type="button" onClick={() => setFiles([])}>
                  Clear All
                </button>
              </div>

              <div className="file-list">
                {files.map((item, index) => (
                  <div
                    key={item.id}
                    className={`file-card ${
                      item.protected ? "protected-file" : ""
                    }`}
                  >
                    <div className="file-index">{index + 1}</div>

                    <div className="file-thumb">
                      {item.thumbnail ? (
                        <img src={item.thumbnail} alt={item.name} />
                      ) : (
                        <span>🔒</span>
                      )}
                    </div>

                    <div className="file-info">
                      <strong>{item.name}</strong>
                      <span>
                        {item.protected
                          ? "Password Protected PDF"
                          : `${item.pages} Pages • ${item.size} MB`}
                      </span>
                    </div>

                    <div className="file-actions">
                      <button
                        type="button"
                        onClick={() => moveFile(index, "up")}
                        disabled={index === 0}
                      >
                        ↑
                      </button>

                      <button
                        type="button"
                        onClick={() => moveFile(index, "down")}
                        disabled={index === files.length - 1}
                      >
                        ↓
                      </button>

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFile(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="merge-btn"
                onClick={mergePDFs}
                disabled={loading}
              >
                {loading ? "Merging PDF..." : "Merge PDF"}
              </button>
            </div>
          </>
        )}

        {history.length > 0 && (
  <div className="history-panel">

    <div className="history-header">
      <h3>Download History</h3>

      <button
        className="clear-history-btn"
        onClick={clearHistory}
      >
        Clear All
      </button>
    </div>

    {history.map((item, index) => (
      <div key={index} className="history-item">

        <div>
          <strong>{item.filename}</strong>

          <span>
            {item.totalPages} Pages • {item.totalSize} MB
          </span>

          <small>{item.date}</small>
        </div>

        <button
          className="delete-history-btn"
          onClick={() => removeHistoryItem(index)}
        >
          🗑 Remove
        </button>

      </div>
    ))}

  </div>
)}
      </div>
    </section>
  );
}