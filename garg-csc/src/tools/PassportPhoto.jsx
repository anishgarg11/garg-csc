import { useState } from "react";

export default function PassportPhotoMaker() {
  const [photo, setPhoto] = useState(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="tool-page">
      <h1>📷 Passport Photo Maker</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handlePhoto}
      />

      {photo && (
        <div className="photo-preview-box">
          <img
            src={photo}
            alt="passport"
            className="passport-preview"
          />
        </div>
      )}

      <button>
        Generate Passport Photo
      </button>
    </div>
  );
}