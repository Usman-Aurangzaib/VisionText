const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const sharp = require("sharp");

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/extract-text", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  try {
    // Preprocess image using Sharp (convert to grayscale and threshold)
    const processedImage = await sharp(req.file.buffer)
      .grayscale()
      .threshold(128)
      .toBuffer();
    
    const result = await Tesseract.recognize(processedImage, "eng", {
      tessedit_pageseg_mode: 6, // Preserve layout as much as possible
    });
    
    res.json({ text: result.data.text });
  } catch (error) {
    res.status(500).json({ error: "Text extraction failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
