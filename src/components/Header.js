// Header.js
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FiImage } from "react-icons/fi";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="modern-nav">
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <FiImage className="me-2" size={24} />
          <span className="gradient-text">VisionText</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#features" className="text-light">Features</Nav.Link>
          <Nav.Link href="#docs" className="text-light">Documentation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;