import React from "react";
import "./About.css";
// import managementImage from "../assets/management.png"; // make sure to use your actual path

const Abouts = () => {
  return (
    <div className="about-section">
      <h2 className="about-heading">
        <span>About Management</span>
        <span className="about-icon">🎗️</span>
      </h2>

      <div className="about-container">
        <div className="about-image">
          <img src="https://www.dewateringpumpsindia.net/images/management1.jpg" alt="Management" />
        </div>

        <div className="about-content">
          <p><strong>Mr. Ashwin R. Kolhe</strong> : Proprietor is the founder of KPR'S PUMPS. He is young, energetic, dynamic and upcoming entrepreneur. Born on 2nd October 1973, completed Production Engineering in 1996. He then worked in various industries of same field (Submersible Dewatering Pumps) for a decade, and then shifted to USA to get specialized training in design and manufacturing of Submersible Dewatering Pumps for three years.</p>

          <p>Subsequently, he made market survey in GCC (Middle East) countries for two years supplying the pumps to various prestigious projects in Dubai and Abu Dhabi of others make and then started his own manufacturing unit of Submersible Dewatering and Non-Clog Pumps up to 50 HP range in India.</p>

          <p><strong>Mr. Kolhe's</strong> life has a big space to put up his own business, considering the experience gained during his career as basic foundation. In July 2007, KPR'S PUMPS came into picture as label. As a result of his continuous efforts, now KPR'S PUMPS is a growing industry in the country.</p>

          <p>Now company exporting its 60% products to GCC Countries / Saudi Arabia. Shortly entering to US market.</p>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
