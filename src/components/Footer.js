// Footer.js
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="gradient-text">VisionText</span>
            <p>Transform images into editable text with AI-powered precision.</p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#github"><FiGithub /></a>
              <a href="#twitter"><FiTwitter /></a>
              <a href="#linkedin"><FiLinkedin /></a>
              <a href="#email"><FiMail /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 VisionText. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;