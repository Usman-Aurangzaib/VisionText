import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.post("http://localhost:5000/extract-text", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setText(response.data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
      alert("Failed to extract text");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>AI Image Text Extractor</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>Extract Text</button>
      <h3>Extracted Text:</h3>
      <pre style={{
        whiteSpace: "pre-wrap",
        textAlign: "left",
        margin: "0 auto",
        width: "80%",
        background: "#f4f4f4",
        padding: "10px",
        border: "1px solid #ddd"
      }}>
        {text}
      </pre>
    </div>
  );
}

export default App;
