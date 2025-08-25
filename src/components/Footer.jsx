import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer text-light pt-5 pb-3">
      <div className="container">
        <div className="row gx-2 gy-4 justify-content-between">
          {/* Column 1: Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>Introduction</li>
              <li>About Management</li>
              <li>Company Profile</li>
              <li>Registered Certification</li>
              <li>Services</li>
              <li>Facilities</li>
              <li>Clients</li>
              <li>Contact Us</li>
              <li>Enquiry</li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Contact Information</h5>
            <p><strong>KPR'S PUMPS</strong></p>
            <p>Shed No.9, Sr.No. 82 / 6A, House No. 1527,<br />
              Gurukrupa Industrial Estate, Opp. Venkatesh Engg.,<br />
              Shivane, Pune - 411023, Maharashtra, India</p>
            <p><strong>Mobile:</strong> +91 95520 06841 / 96237 72704</p>
            <p><strong>Sales:</strong> Ms. Sharvari Kolhe</p>
            <p><strong>Sales Mobile:</strong> +91 96237 72704</p>
            <p><strong>Email:</strong><br />
              response@dewateringpumpsindia.net<br />
              sharvari@kprspumps.com</p>
            <p><strong>Website:</strong><br />
              www.kprspumps.com</p>
          </div>

          {/* Column 3: Product Series */}
          <div className="col-lg-5 col-md-12">
            <h5 className="footer-title">Product Series</h5>
            <div className="row">
              <div className="col-sm-6">
                <p><strong>Dewatering Pumps:</strong></p>
                <ul className="footer-products">
                  <li>AK-1-5150-2P</li>
                  <li>AK-1.5350-2P</li>
                  <li>AK-1.5360-2P</li>
                  <li>AK-2350-2P</li>
                  <li>AK-3350-2P</li>
                  <li>AK-6350-2P</li>
                  <li>AK-8350-2P</li>
                  <li>AK-8350h-2P</li>
                  <li>AK-10350-2P</li>
                  <li>AK-15350-2P</li>
                  <li>AK-35350m-L-2P</li>
                  <li>AK-Small-series</li>
                  <li>Technical Specification</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <p><strong>Non-Clog Pumps:</strong></p>
                <ul className="footer-products">
                  <li>SK 3350 NC</li>
                  <li>SK 6350 NC</li>
                  <li>SK 8350 NC</li>
                  <li>SK 10350 NC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
