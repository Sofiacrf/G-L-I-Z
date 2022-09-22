import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bootstrapLogo from "../../assets/bootstrap-img.png";
import "./navBar.css";

function NavbarComponent() {
  return (
    <Navbar className="text-style background-c" expand="lg">
      <Container>
        <a href="/">
        <img
          src={bootstrapLogo}
          alt="company´s logo"
          width="40"
          height="32"
          className="d-block me-2"
          href="/"
        />
        </a>
        <Navbar.Brand className="brand-name" href="/">Lawyers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-size">
            <Nav.Link href="/quienes-somos">Nosotros</Nav.Link>
            <Nav.Link href="/nuestros-servicios">Servicios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
