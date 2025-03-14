import React, { useState } from "react";
import { Container, Card, Button, Form, Spinner } from "react-bootstrap";
import {
  FiCopy,
  FiUpload,
  FiDownload,
  FiFile,
  FiCheckCircle,
} from "react-icons/fi";
// import { Clipboard, CloudUpload, Download } from "react-bootstrap-icons";
import "./TextExtractor.css";
import axios from "axios";

const TextExtractor = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image or PDF");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/extract-text",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setText(response.data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
      alert("Failed to extract text");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "extracted_text.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="modern-bg">
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Card className="glass-card">
          <div className="text-center mb-4">
            <div className="icon-wrapper pulse">
              <FiFile className="main-icon" />
              {file && <FiCheckCircle className="checkmark" />}
            </div>
            <h2 className="modern-title gradient-text">Vision Extract</h2>
            <p className="modern-subtitle">AI-Powered Text Extraction</p>
          </div>

          <Form.Group className="mb-4 d-flex justify-content-center">
            <Form.Label
              htmlFor="fileInput"
              className={`upload-area ${file ? "active" : ""}`}
              style={{ width: "100%", maxWidth: "480px" }}
            >
              <div className="upload-content">
                <div className="upload-visual mb-3">
                  <FiUpload className="upload-icon" />
                  <div className="upload-circle"></div>
                </div>
                <div className="upload-text">
                  {file ? (
                    <div className="d-flex align-items-center gap-2">
                      <FiCheckCircle className="text-success" />
                      <span className="file-name">{file.name}</span>
                    </div>
                  ) : (
                    <>
                      <div className="drag-text">Drag & drop files here</div>
                      {/* <div className="or-divider">or</div> */}
                      <div className="browse-wrapper">
                        <span className="browse-link">Browse files</span>
                        <span className="browse-sub">(JPG, PNG, PDF)</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Form.Label>
            <Form.Control
              type="file"
              accept="image/*,.pdf"
              id="fileInput"
              onChange={handleFileChange}
              hidden
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={loading}
            className="neon-button"
          >
            {loading ? (
              <Spinner animation="border" role="status" />
            ) : (
              <>
                <span className="button-text">Extract Text</span>
                <span className="button-gradient"></span>
              </>
            )}
          </Button>

          {text && (
            <div className="result-box slide-in">
              <div className="result-header">
                <h5 className="d-flex align-items-center gap-2">
                  <span className="text-badge">EXTRACTED</span>
                  <span>Text Content</span>
                </h5>
                <div className="action-buttons">
                  <button
                    onClick={handleCopy}
                    className="icon-button hover-scale"
                    aria-label="Copy text"
                  >
                    <FiCopy className="action-icon" />
                    <span className="button-glow"></span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="icon-button hover-scale"
                    aria-label="Download text"
                  >
                    <FiDownload className="action-icon" />
                    <span className="button-glow"></span>
                  </button>
                </div>
              </div>
              <div className="text-preview">
                <div className="scroller">
                  {text.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-paragraph">
                      {paragraph.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default TextExtractor;
