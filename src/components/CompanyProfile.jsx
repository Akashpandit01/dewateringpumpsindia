import React from "react";
import "./CompanyProfile.css";

const CompanyProfile = () => {
  return (
    <div className="company-profile-section">
      <h2 className="section-title">
        <span>Company Profile</span>
        <span className="section-icon">🎗️</span>
      </h2>

      <div className="company-profile-container">
        <div className="company-image">
          <img
            src="https://www.dewateringpumpsindia.net/images/comprf.png"
            alt="Company Profile"
          />
        </div>

        <div className="company-details fade-in">
          <div className="info-box">
            <p><strong>Name of the Organization:</strong> KPR'S PUMPS</p>
            <p><strong>Nature of the Organization:</strong> Proprietorship</p>
            <p><strong>Proprietor:</strong> Mr. Ashwin R. Kolhe</p>
            <p><strong>Founded in:</strong> 2007</p>
          </div>

          <div className="info-box">
            <h3 className="subheading">Staff</h3>
            <p><strong>Management:</strong> 3</p>
            <p><strong>Manufacturing:</strong> 10-12</p>
            <p><strong>Marketing Engineer:</strong> 5</p>
            <p><strong>Technician:</strong> 3</p>
            <p><strong>Service Team:</strong> 4</p>
          </div>

          <div className="info-box">
            <h3 className="subheading">Business</h3>
            <p><strong>Domestic Business:</strong> 40%</p>
            <p><strong>Export Business:</strong> 60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
