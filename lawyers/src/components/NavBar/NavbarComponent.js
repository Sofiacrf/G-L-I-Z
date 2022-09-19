import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bootstrapLogo from "../../assets/bootstrap-img.png";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img
          src={bootstrapLogo}
          width="40"
          height="32"
          className="d-block me-2"
        />
        <Navbar.Brand href="#home">Lawyers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/quienes-somos">Quiénes Somos</Nav.Link>
            <Nav.Link href="/nuestros-servicios">Nuestros Servicios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
