import { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "./PassportPhoto.css";

const DEFAULT_DPI = 300;

const mmToPx = (mm, dpi = DEFAULT_DPI) =>
  Math.round((Number(mm) / 25.4) * Number(dpi));

const PHOTO_PRESETS = {
  india: { label: "India Passport / Visa", width: 35, height: 45 },
  us: { label: "US Visa", width: 51, height: 51 },
  canada: { label: "Canada Visa", width: 50, height: 70 },
  schengen: { label: "Schengen Visa", width: 35, height: 45 },
  pan: { label: "PAN / Job Form", width: 35, height: 45 },
  custom: { label: "Custom Size", width: 35, height: 45 },
};

const SHEET_PRESETS = {
  a4: { label: "A4 Sheet", width: 210, height: 297 },
  a5: { label: "A5 Sheet", width: 148, height: 210 },
  fourSix: { label: "4 x 6 inch", width: 101.6, height: 152.4 },
  fiveSeven: { label: "5 x 7 inch", width: 127, height: 177.8 },
  letter: { label: "Letter", width: 215.9, height: 279.4 },
  custom: { label: "Custom Sheet", width: 210, height: 297 },
};

export default function PassportPhoto() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1.25);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [photoPreset, setPhotoPreset] = useState("india");
  const [photoWidthMm, setPhotoWidthMm] = useState(35);
  const [photoHeightMm, setPhotoHeightMm] = useState(45);
  const [dpi, setDpi] = useState(300);

  const [sheetPreset, setSheetPreset] = useState("a4");
  const [sheetWidthMm, setSheetWidthMm] = useState(210);
  const [sheetHeightMm, setSheetHeightMm] = useState(297);

  const [photoCount, setPhotoCount] = useState(5);
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(5);
  const [autoFit, setAutoFit] = useState(false);
  const [autoCenter, setAutoCenter] = useState(true);

  const [gapMm, setGapMm] = useState(0);
  const [marginTopMm, setMarginTopMm] = useState(0);
  const [marginLeftMm, setMarginLeftMm] = useState(0);

  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [grayscale, setGrayscale] = useState(0);

  const [bgColor, setBgColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#d1d5db");
  const [borderSize, setBorderSize] = useState(1);
  const [showBorder, setShowBorder] = useState(true);
  const [showCutMarks, setShowCutMarks] = useState(true);
  const [showGuides, setShowGuides] = useState(true);
  const [headGuide, setHeadGuide] = useState(true);

  const [flip, setFlip] = useState(false);
  const [photoScale, setPhotoScale] = useState(1);

  

  const photoWidthPx = mmToPx(photoWidthMm, dpi);
  const photoHeightPx = mmToPx(photoHeightMm, dpi);
  const sheetWidthPx = mmToPx(sheetWidthMm, dpi);
  const sheetHeightPx = mmToPx(sheetHeightMm, dpi);
  const gapPx = mmToPx(gapMm, dpi);
  const marginTopPx = mmToPx(marginTopMm, dpi);
  const marginLeftPx = mmToPx(marginLeftMm, dpi);

  const finalPhotoWidth = Math.round(photoWidthPx * Number(photoScale));
  const finalPhotoHeight = Math.round(photoHeightPx * Number(photoScale));
  const aspectRatio = Number(photoWidthMm) / Number(photoHeightMm);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const setUploadedFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImage(URL.createObjectURL(file));
    setQuality({
      blur: "Not checked",
      background: "Not checked",
      face: "Not checked",
    });
  };

  const handleUpload = (e) => {
    setUploadedFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setUploadedFile(e.dataTransfer.files?.[0]);
  };

  const handlePhotoPreset = (value) => {
    setPhotoPreset(value);
    const preset = PHOTO_PRESETS[value];
    setPhotoWidthMm(preset.width);
    setPhotoHeightMm(preset.height);
  };

  const handleSheetPreset = (value) => {
    setSheetPreset(value);
    const preset = SHEET_PRESETS[value];
    setSheetWidthMm(preset.width);
    setSheetHeightMm(preset.height);
  };

  const getCalculatedCols = () => {
    if (!autoFit) return Math.max(1, Number(cols));

    return Math.max(
      1,
      Math.floor(
        (sheetWidthPx - marginLeftPx * 2 + gapPx) /
          (finalPhotoWidth + gapPx)
      )
    );
  };

  const getCalculatedRows = () => {
    if (!autoFit) return Math.max(1, Number(rows));

    return Math.max(
      1,
      Math.floor(
        (sheetHeightPx - marginTopPx * 2 + gapPx) /
          (finalPhotoHeight + gapPx)
      )
    );
  };

  

  const drawCutMarks = (ctx, x, y, w, h) => {
    if (!showCutMarks) return;

    const mark = Math.max(10, Math.round(w * 0.08));
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 1;
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + mark, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + mark);

    ctx.moveTo(x + w, y);
    ctx.lineTo(x + w - mark, y);
    ctx.moveTo(x + w, y);
    ctx.lineTo(x + w, y + mark);

    ctx.moveTo(x, y + h);
    ctx.lineTo(x + mark, y + h);
    ctx.moveTo(x, y + h);
    ctx.lineTo(x, y + h - mark);

    ctx.moveTo(x + w, y + h);
    ctx.lineTo(x + w - mark, y + h);
    ctx.moveTo(x + w, y + h);
    ctx.lineTo(x + w, y + h - mark);

    ctx.stroke();
  };

  const drawPhoto = (ctx, img, x, y, w, h) => {
    if (!croppedAreaPixels) return;

    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, w, h);

    ctx.save();
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`;

    if (flip) {
      ctx.translate(x + w, y);
      ctx.scale(-1, 1);
      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        w,
        h
      );
    } else {
      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        x,
        y,
        w,
        h
      );
    }

    ctx.restore();

    if (showBorder && borderSize > 0) {
      ctx.lineWidth = Number(borderSize);
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, w, h);
    }

    drawCutMarks(ctx, x, y, w, h);
  };

  const generateCanvas = async (mode = "sheet") => {
    if (!image || !croppedAreaPixels) {
      alert("Please upload and crop photo first.");
      return null;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (mode === "single") {
      canvas.width = finalPhotoWidth;
      canvas.height = finalPhotoHeight;
      drawPhoto(ctx, img, 0, 0, finalPhotoWidth, finalPhotoHeight);
      return canvas;
    }

    canvas.width = sheetWidthPx;
    canvas.height = sheetHeightPx;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const calculatedCols = getCalculatedCols();
    const calculatedRows = getCalculatedRows();
    const maxPhotos = Math.min(photoCount, calculatedCols * calculatedRows);

    const usedCols = Math.min(calculatedCols, maxPhotos);
    const usedRows = Math.ceil(maxPhotos / calculatedCols);

    const usedWidth =
      usedCols * finalPhotoWidth + Math.max(0, usedCols - 1) * gapPx;
    const usedHeight =
      usedRows * finalPhotoHeight + Math.max(0, usedRows - 1) * gapPx;

    const startX = autoCenter
      ? Math.max(0, (sheetWidthPx - usedWidth) / 2)
      : marginLeftPx;
    const startY = autoCenter
      ? Math.max(0, (sheetHeightPx - usedHeight) / 2)
      : marginTopPx;

    if (showGuides) {
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        marginLeftPx,
        marginTopPx,
        sheetWidthPx - marginLeftPx * 2,
        sheetHeightPx - marginTopPx * 2
      );
    }

    for (let i = 0; i < maxPhotos; i++) {
      const col = i % calculatedCols;
      const row = Math.floor(i / calculatedCols);

      const x = startX + col * (finalPhotoWidth + gapPx);
      const y = startY + row * (finalPhotoHeight + gapPx);

      if (x + finalPhotoWidth > sheetWidthPx || y + finalPhotoHeight > sheetHeightPx) {
        continue;
      }

      drawPhoto(ctx, img, x, y, finalPhotoWidth, finalPhotoHeight);
    }

    return canvas;
  };

  const downloadSingle = async (type = "png") => {
    const canvas = await generateCanvas("single");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `passport_photo_gargcsc.${type}`;
    link.href =
      type === "jpg"
        ? canvas.toDataURL("image/jpeg", 0.95)
        : canvas.toDataURL("image/png");

    link.click();
  };

  const downloadSheet = async (type = "png") => {
    const canvas = await generateCanvas("sheet");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `passport_photo_sheet_gargcsc.${type}`;
    link.href =
      type === "jpg"
        ? canvas.toDataURL("image/jpeg", 0.95)
        : canvas.toDataURL("image/png");

    link.click();
  };

  const downloadPDF = async () => {
    const canvas = await generateCanvas("sheet");
    if (!canvas) return;

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    const pdf = new jsPDF({
      orientation: sheetWidthMm > sheetHeightMm ? "landscape" : "portrait",
      unit: "mm",
      format: [sheetWidthMm, sheetHeightMm],
    });

    pdf.addImage(imgData, "JPEG", 0, 0, sheetWidthMm, sheetHeightMm);
    pdf.save("passport_photo_sheet_gargcsc.pdf");
  };

  const downloadZip = async () => {
    const singleCanvas = await generateCanvas("single");
    const sheetCanvas = await generateCanvas("sheet");

    if (!singleCanvas || !sheetCanvas) return;

    const zip = new JSZip();

    const singlePngBlob = await new Promise((resolve) =>
      singleCanvas.toBlob(resolve, "image/png")
    );

    const sheetPngBlob = await new Promise((resolve) =>
      sheetCanvas.toBlob(resolve, "image/png")
    );

    const sheetJpgBlob = await new Promise((resolve) =>
      sheetCanvas.toBlob(resolve, "image/jpeg", 0.95)
    );

    const pdf = new jsPDF({
      orientation: sheetWidthMm > sheetHeightMm ? "landscape" : "portrait",
      unit: "mm",
      format: [sheetWidthMm, sheetHeightMm],
    });

    pdf.addImage(
      sheetCanvas.toDataURL("image/jpeg", 0.95),
      "JPEG",
      0,
      0,
      sheetWidthMm,
      sheetHeightMm
    );

    zip.file("passport_photo_single_gargcsc.png", singlePngBlob);
    zip.file("passport_photo_sheet_gargcsc.png", sheetPngBlob);
    zip.file("passport_photo_sheet_gargcsc.jpg", sheetJpgBlob);
    zip.file("passport_photo_sheet_gargcsc.pdf", pdf.output("blob"));

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "passport_photo_files_gargcsc.zip");
  };

  const resetEditing = () => {
    setZoom(1.25);
    setRotation(0);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setGrayscale(0);
    setFlip(false);
    setPhotoScale(1);
    setBgColor("#ffffff");
    setBorderColor("#000000");
    setBorderSize(1);
    setShowBorder(true);
    setShowCutMarks(true);
    setShowGuides(true);
  };

  const removeBackground = () => {
    alert(
      "AI background removal needs backend/API. Background color replacement is available here."
    );
  };

  const calculatedCols = getCalculatedCols();
  const calculatedRows = getCalculatedRows();
  const maxPreviewPhotos = Math.min(photoCount, calculatedCols * calculatedRows, 80);

  const previewPhotos = Array.from({ length: maxPreviewPhotos });

  const printGridStyle = {
    gridTemplateColumns: `repeat(${calculatedCols}, ${photoWidthMm}mm)`,
    gridAutoRows: `${photoHeightMm}mm`,
    gap: `${gapMm}mm`,
    padding: autoCenter ? "0mm" : `${marginTopMm}mm 0 0 ${marginLeftMm}mm`,
  };

  return (
    <section className="passport-editor-page">
      <div className="photoshop-topbar">
        <strong>Ps</strong>
        <span>File</span>
        <span>Edit</span>
        <span>Image</span>
        <span>Layer</span>
        <span>Select</span>
        <span>Filter</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <div className="photoshop-options">
        <span>Passport Photo Maker</span>
        <span>{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={resetEditing}>Reset</button>
        <button type="button" onClick={downloadPDF}>Download PDF</button>
      </div>

      <div className="passport-editor-layout">
        <aside className="left-toolbar">
          <button type="button" title="Upload" onClick={() => fileInputRef.current?.click()}>📁</button>
          <button type="button" title="Crop">✂️</button>
          <button type="button" title="Resize">📐</button>
          <button type="button" title="Rotate">🔄</button>
          <button type="button" title="Background">🎨</button>
          <button type="button" title="Print" onClick={() => window.print()}>🖨️</button>
        </aside>

        <main className="editor-center">
          <div className="canvas-tabs">
            <span>Untitled-1 @ {Math.round(zoom * 100)}% (RGB/8)</span>
          </div>

          <div className="ruler-horizontal" />

          <div className="workspace-with-ruler">
            <div className="ruler-vertical" />

            <div
              className="crop-workspace"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {image ? (
                <>
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={aspectRatio}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    style={{
                      containerStyle: { background: bgColor },
                      mediaStyle: {
                        filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`,
                        transform: flip ? "scaleX(-1)" : "none",
                      },
                    }}
                  />

                  {headGuide && (
                    <div className="head-guide">
                      <span>Head Area</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="upload-placeholder">
                  Drag & drop photo here or upload from right panel
                </div>
              )}
            </div>
          </div>

          <div className="sheet-preview-panel">
            <div className="preview-title">
              <h3>Live Print Preview</h3>
              <p>
                {SHEET_PRESETS[sheetPreset].label} • {photoCount} Photos •{" "}
                {photoWidthMm}×{photoHeightMm}mm
              </p>
            </div>

            <div className="print-sheet-preview">
              <div
                className="sheet-paper"
                style={{
                  aspectRatio: `${sheetWidthMm} / ${sheetHeightMm}`,
                  gridTemplateColumns: `repeat(${calculatedCols}, minmax(38px, 1fr))`,
                }}
              >
                {previewPhotos.map((_, index) => (
                  <div
                    key={index}
                    className="sheet-photo-box"
                    style={{
                      backgroundColor: bgColor,
                      borderColor,
                      aspectRatio: `${photoWidthMm} / ${photoHeightMm}`,
                    }}
                  >
                    {image ? (
                    <img
  src={image}
  alt="preview"
  className="preview-photo-img"
  style={{
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`,
    transform: `scale(${photoScale}) ${flip ? "scaleX(-1)" : ""}`,
  }}
/>
                    ) : (
                      <span>Photo</span>
                    )}
                    {showCutMarks && <i className="cut-mark" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <aside className="right-properties">
          <div className="panel">
            <h3>Document</h3>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
            />

            <label>Passport Preset</label>
            <select
              value={photoPreset}
              onChange={(e) => handlePhotoPreset(e.target.value)}
            >
              {Object.entries(PHOTO_PRESETS).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
          </div>

         

          <div className="panel">
            <h3>Image Size</h3>

            <div className="two-col">
              <div>
                <label>W mm</label>
                <input type="number" value={photoWidthMm} onChange={(e) => setPhotoWidthMm(Number(e.target.value))} />
              </div>
              <div>
                <label>H mm</label>
                <input type="number" value={photoHeightMm} onChange={(e) => setPhotoHeightMm(Number(e.target.value))} />
              </div>
              <div>
                <label>DPI</label>
                <input type="number" value={dpi} onChange={(e) => setDpi(Number(e.target.value))} />
              </div>
              <div>
                <label>Preview Scale</label>
                <input type="number" step="0.1" value={photoScale} onChange={(e) => setPhotoScale(Number(e.target.value))} />
              </div>
            </div>

            <p className="small-info">
              Output: {finalPhotoWidth}px × {finalPhotoHeight}px
            </p>
          </div>

          <div className="panel">
            <h3>Sheet & Count</h3>

            <label>Sheet Size</label>
            <select value={sheetPreset} onChange={(e) => handleSheetPreset(e.target.value)}>
              {Object.entries(SHEET_PRESETS).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>

            <div className="two-col">
              <div>
                <label>Sheet W mm</label>
                <input type="number" value={sheetWidthMm} onChange={(e) => setSheetWidthMm(Number(e.target.value))} />
              </div>
              <div>
                <label>Sheet H mm</label>
                <input type="number" value={sheetHeightMm} onChange={(e) => setSheetHeightMm(Number(e.target.value))} />
              </div>
              <div>
                <label>Count</label>
                <input type="number" min="1" max="80" value={photoCount} onChange={(e) => setPhotoCount(Number(e.target.value))} />
              </div>
              <div>
                <label>Gap mm</label>
                <input type="number" value={gapMm} onChange={(e) => setGapMm(Number(e.target.value))} />
              </div>
            </div>

            <div className="quick-counts">
              {[5, 10, 15, 20, 25, 30].map((count) => (
  <button key={count} type="button" onClick={() => setPhotoCount(count)}>
    {count}
  </button>
))}
            </div>
          </div>

          <div className="panel">
            <h3>Rows & Columns</h3>

            <div className="two-col">
              <div>
                <label>Rows</label>
                <input type="number" min="1" value={rows} onChange={(e) => setRows(Number(e.target.value))} />
              </div>
              <div>
                <label>Columns</label>
                <input type="number" min="1" value={cols} onChange={(e) => setCols(Number(e.target.value))} />
              </div>
            </div>

            <label className="check-row">
              <input type="checkbox" checked={autoFit} onChange={(e) => setAutoFit(e.target.checked)} />
              Auto Fit Photos on Sheet
            </label>
          </div>

          <div className="panel">
            <h3>Margins</h3>

            <div className="two-col">
              <div>
                <label>Top mm</label>
                <input type="number" value={marginTopMm} onChange={(e) => setMarginTopMm(Number(e.target.value))} />
              </div>
              <div>
                <label>Left mm</label>
                <input type="number" value={marginLeftMm} onChange={(e) => setMarginLeftMm(Number(e.target.value))} />
              </div>
            </div>

            <label className="check-row">
              <input type="checkbox" checked={autoCenter} onChange={(e) => setAutoCenter(e.target.checked)} />
              Auto Center Photos
            </label>
          </div>

          <div className="panel">
            <h3>Adjustments</h3>

            <label>Zoom {zoom}</label>
            <input type="range" min="1" max="4" step="0.1" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} />

            <label>Rotate {rotation}°</label>
            <input type="range" min="-180" max="180" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} />

            <label>Brightness {brightness}%</label>
            <input type="range" min="50" max="180" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} />

            <label>Contrast {contrast}%</label>
            <input type="range" min="50" max="180" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} />

            <label>Saturation {saturation}%</label>
            <input type="range" min="0" max="200" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} />

            <label>Grayscale {grayscale}%</label>
            <input type="range" min="0" max="100" value={grayscale} onChange={(e) => setGrayscale(Number(e.target.value))} />
          </div>

          <div className="panel">
            <h3>Background & Print Marks</h3>

            <label>Background</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

            <button type="button" onClick={removeBackground}>
              Remove Background
            </button>

            <label>Border Color</label>
            <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />

            <label>Border Size</label>
            <input type="number" min="0" value={borderSize} onChange={(e) => setBorderSize(Number(e.target.value))} />

            <label className="check-row">
              <input type="checkbox" checked={showBorder} onChange={(e) => setShowBorder(e.target.checked)} />
              Border On / Off
            </label>

            <label className="check-row">
              <input type="checkbox" checked={showCutMarks} onChange={(e) => setShowCutMarks(e.target.checked)} />
              Print Cut Marks
            </label>

            <label className="check-row">
              <input type="checkbox" checked={showGuides} onChange={(e) => setShowGuides(e.target.checked)} />
              Print Guidelines
            </label>

            <label className="check-row">
              <input type="checkbox" checked={headGuide} onChange={(e) => setHeadGuide(e.target.checked)} />
              Head Size Indicator
            </label>

            <button type="button" onClick={() => setFlip(!flip)}>
              {flip ? "Unflip Image" : "Flip Horizontal"}
            </button>
          </div>

          <div className="panel download-panel">
            <h3>Download Options</h3>

            <button type="button" onClick={() => downloadSingle("png")}>Single PNG</button>
            <button type="button" onClick={() => downloadSingle("jpg")}>Single JPG</button>
            <button type="button" onClick={() => downloadSheet("png")}>Sheet PNG</button>
            <button type="button" onClick={() => downloadSheet("jpg")}>Sheet JPG</button>
            <button type="button" onClick={downloadPDF}>Sheet PDF</button>
            <button type="button" onClick={downloadZip}>Download ZIP</button>
          </div>
        </aside>
      </div>

      <div className="passport-print-only">
  <div className="print-sheet-paper">
    {Array.from({ length: Number(photoCount) }).map((_, index) => (
      <div key={index} className="print-photo-box">
        {image && (
          <img
            src={image}
            alt="print"
            style={{
              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%)`,
              transform: `scale(${photoScale}) ${flip ? "scaleX(-1)" : ""}`,
            }}
          />
        )}
      </div>
    ))}
  </div>
</div>
    </section>
  );
}