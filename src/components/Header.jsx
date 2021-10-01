import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/brand-logo.png";

function Header() {
  return (
    <Navbar
      id="mainNav"
      bg="transparent"
      expand="xl"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href="#home" className="nav-text">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="ml-auto">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-text ml-auto">
            Home
          </Nav.Link>
          <Nav.Link href="#skills" className="nav-text ml-auto">
            Skills
          </Nav.Link>
          <Nav.Link href="#works" className="nav-text ml-auto">
            Works
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-text ml-auto">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
