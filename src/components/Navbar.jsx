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

            {/* About Us Dropdown */}
            <div className="dropdown-wrapper">
              <div className="custom-link dropdown-toggle">About Us</div>
              <div className="dropdown-menu">
                <NavLink to="/about/introduction" className="custom-link">Introduction</NavLink>
                <NavLink to="/about/management" className="custom-link">About Management</NavLink>
                <NavLink to="/about/profile" className="custom-link">Company Profile</NavLink>
                <NavLink to="/about/certification" className="custom-link">Registered Certification</NavLink>
              </div>
            </div>

            {/* Products Dropdown with Nested Levels */}
            <div className="dropdown-wrapper">
              <div className="custom-link dropdown-toggle">Products</div>
              <div className="dropdown-menu">

                <div className="dropdown-submenu">
                  <div className="custom-link dropdown-toggle">Dewatering Pumps</div>
                  <div className="dropdown-menu right">
                    <NavLink to="/products/AK-1-5150-2P" className="custom-link">AK-1-5150-2P</NavLink>
                    <NavLink to="/products/AK-1-5350-2P" className="custom-link">AK-1-5350-2P</NavLink>
                    <NavLink to="/products/AK-1-5360-2P" className="custom-link">AK-1-5360-2P</NavLink>
                    <NavLink to="/products/AK-2350-2P" className="custom-link">AK-2350-2P</NavLink>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <div className="custom-link dropdown-toggle">Non-Clog Pumps</div>
                  <div className="dropdown-menu right">
                    <NavLink to="/products/SK-3350-NC" className="custom-link">SK 3350 NC</NavLink>
                    <NavLink to="/products/SK-6350-NC" className="custom-link">SK 6350 NC</NavLink>
                    <NavLink to="/products/SK-8350-NC" className="custom-link">SK 8350 NC</NavLink>
                    <NavLink to="/products/SK-10350-NC" className="custom-link">SK 10350 NC</NavLink>
                  </div>
                </div>

                <NavLink to="/products/tech-specs" className="custom-link">TECH-SPECIFICATIONS</NavLink>
              </div>
            </div>

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
