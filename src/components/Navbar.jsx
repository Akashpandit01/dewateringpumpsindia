import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/logo.png"
            alt="KPR's Pumps"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          KPR's PUMPS
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="ms-auto navbar-nav">

            <NavLink to="/" className="custom-link">Home</NavLink>
            <NavLink to="/about" className="custom-link">About Us</NavLink>

            {/* Replaced Dropdown with Direct Products Page Link */}
            <NavLink to="/products" className="custom-link">Products</NavLink>

            <NavLink to="/services" className="custom-link">Services</NavLink>
            <NavLink to="/facilities" className="custom-link">Facilities</NavLink>
            <NavLink to="/clients" className="custom-link">Clients</NavLink>
            <NavLink to="/contact" className="custom-link">Contact Us</NavLink>
            <NavLink to="/enquiry" className="custom-link">Enquiry</NavLink>

          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
