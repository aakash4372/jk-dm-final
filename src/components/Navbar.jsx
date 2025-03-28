import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navbar.css";
import logo from './logo.png';
const ResponsiveNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`navbar ${scrolled ? "scrolled" : "bg-transparent"}`}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Brand-logo"
              className="d-inline-block align-top logo-transition"
              style={{ height: "55px", marginRight: "10px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="gap-4">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-6" >
            <Nav.Link as={Link} to="/#home" onClick={() => setShow(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setShow(false)}>Home</Nav.Link>

            <Nav.Link as={Link} to="/contact" onClick={() => setShow(false)}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ResponsiveNavbar;