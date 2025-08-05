import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="modern-footer py-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">

          {/* Column 1: Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/introduction">Introduction</a></li>
              <li><a href="/management">About Management</a></li>
              <li><a href="/profile">Company Profile</a></li>
              <li><a href="/certification">Registered Certification</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/facilities">Facilities</a></li>
              <li><a href="/clients">Clients</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/enquiry">Enquiry</a></li>
            </ul>
          </div>

          {/* Column 2: Address */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Address</h5>
            <p className="footer-text">
              <strong>KPR'S PUMPS</strong><br />
              Shed No.9, Sr.No. 82 / 6A, House No. 1527,<br />
              Gurukrupa Industrial Estate, Opp. Venkatesh Engg.,<br />
              Shivane, Pune - 411023, Maharashtra, India
            </p>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-4 col-md-12">
            <h5 className="footer-heading">Contact</h5>
            <div className="d-flex flex-wrap gap-3 contact-horizontal">
              <div><strong>Mobile:</strong> <span>+91 95520 06841 / 96237 72704</span></div>
              <div><strong>Email:</strong> <a href="mailto:response@dewateringpumpsindia.net">response@dewateringpumpsindia.net</a></div>
              <div>
                <strong>Sales:</strong> Ms. Sharvari Kolhe<br />
                Mob: +91 96237 72704<br />
                Email: <a href="mailto:sharvari@kprspumps.com">sharvari@kprspumps.com</a>
              </div>
              <div><strong>Web:</strong> <a href="https://www.kprspumps.com" target="_blank" rel="noreferrer">www.kprspumps.com</a></div>
            </div>
          </div>
        </div>

        {/* Footer bottom note */}
        <div className="footer-bottom mt-4 pt-4 border-top text-center">
          <p className="small text-muted">
            Designed by: <strong>MID</strong> • Hosted by: <strong>GID</strong> • Promoted by: <strong>PBD</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
