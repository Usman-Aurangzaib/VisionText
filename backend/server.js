const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const sharp = require("sharp");
const pdfParse = require("pdf-parse");

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/extract-text", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const fileType = req.file.mimetype;

    if (fileType === "application/pdf") {
      // 📝 Extract text from PDF
      const pdfData = await pdfParse(req.file.buffer);
      return res.json({ text: pdfData.text.trim() });
    } else if (fileType.startsWith("image/")) {
      // 🖼️ Extract text from Image
      const processedImage = await sharp(req.file.buffer)
        .grayscale()
        .threshold(128)
        .toBuffer();

      const result = await Tesseract.recognize(processedImage, "eng", {
        tessedit_pageseg_mode: 6,
      });

      return res.json({ text: result.data.text.trim() });
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Text extraction failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
