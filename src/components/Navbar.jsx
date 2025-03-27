import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navbar.css";
import logo from '../components/logo.png';
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

              <NavDropdown
                title="Services"
                id="services-dropdown"
                show={dropdownOpen}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/services/graphic-designing">Graphic Designing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/video-editing">Video Editing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/motion-graphic">Motion Graphic</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/digital-marketing">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/magazine-designing">Magazine Designing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/website-development">Website Development</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/branding">Branding</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/#home" onClick={() => setShow(false)}>Home</Nav.Link>

            <NavDropdown title="Services" id="offcanvas-services-dropdown">
              <NavDropdown.Item as={Link} to="/services/graphic-designing" onClick={() => setShow(false)}>Graphic Designing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/video-editing" onClick={() => setShow(false)}>Video Editing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/motion-graphic" onClick={() => setShow(false)}>Motion Graphic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/digital-marketing" onClick={() => setShow(false)}>Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/magazine-designing" onClick={() => setShow(false)}>Magazine Designing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/website-development" onClick={() => setShow(false)}>Website Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/branding" onClick={() => setShow(false)}>Branding</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/#contact" onClick={() => setShow(false)}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ResponsiveNavbar;