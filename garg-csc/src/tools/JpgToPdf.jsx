import { useState } from "react";

export default function JpgToPdf() {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div className="tool-page">
      <h1>🖼 JPG to PDF</h1>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImages}
      />

      <p>{images.length} image(s) selected</p>

      <button>
        Convert to PDF
      </button>
    </div>
  );
}