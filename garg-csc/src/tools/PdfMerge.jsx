import { useState } from "react";

export default function PdfMerge() {
  const [files, setFiles] = useState([]);

  return (
    <div className="tool-page">
      <h1>📑 PDF Merge</h1>

      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={(e) =>
          setFiles([...e.target.files])
        }
      />

      <p>{files.length} PDF(s) selected</p>

      <button>
        Merge PDFs
      </button>
    </div>
  );
}