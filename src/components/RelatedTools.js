// RelatedTools.js
import { Card } from "react-bootstrap";
import { FiUploadCloud, FiSettings, FiSave } from "react-icons/fi";

const RelatedTools = () => {
  return (
    <section className="modern-steps py-5">
      <div className="container">
        <h2 className="text-center mb-5 modern-section-title">
          Simple Text Extraction in 3 Steps
        </h2>
        
        <div className="step-grid">
          {/* Step 1 */}
          <Card className="step-card">
            <div className="step-icon-wrapper bg-teal">
              <FiUploadCloud size={32} />
            </div>
            <Card.Body>
              <Card.Title className="step-title">Upload Your File</Card.Title>
              <Card.Text className="step-description">
                Drag & drop images or PDFs directly into our secure converter.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Step 2 */}
          <Card className="step-card">
            <div className="step-icon-wrapper bg-indigo">
              <FiSettings size={32} />
            </div>
            <Card.Body>
              <Card.Title className="step-title">AI Processing</Card.Title>
              <Card.Text className="step-description">
                Advanced OCR technology extracts text with precision.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Step 3 */}
          <Card className="step-card">
            <div className="step-icon-wrapper bg-purple">
              <FiSave size={32} />
            </div>
            <Card.Body>
              <Card.Title className="step-title">Save & Export</Card.Title>
              <Card.Text className="step-description">
                Copy directly or export as TXT, DOC, or PDF files.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RelatedTools;