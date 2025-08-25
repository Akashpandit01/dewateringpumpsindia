import React from "react";
import "./Introduction.css"; // Don't forget to import the CSS

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="container">
        <h2 className="section-title">Introduction</h2>

        {/* Image on top */}
       

        {/* Text Content Below Image */}
        <div className="content">
          <p>
            We are Manufacturer, Supplier, Exporter of Electric Submersible Non Clog Pumps,
            Dewatering Pump, Dewatering Submersible Pumps, Dewatering Pumps, Electric Submersible
            Dewatering Pumps and Our setup is situated at Pune, Maharashtra, India.
          </p>
          <p>
            KPR'S PUMPS, has over 10 years experience in submersible technology and during this time
            has developed a number of patented engineering and design innovations to improve
            equipment performance and efficiency. Our broad product range extends from 1.5 HP to 50
            HP dewatering pumps. KPR'S PUMPS's equipment is being used successfully in wastewater,
            storm water, industrial and power plant applications including in nuclear power plants.
          </p>
          <p>
            The company is having their branch offices in Dubai & Bahrain. At present the company is
            exporting 40% products to G.C.C Countries and supplied the pumps in very prestigious
            projects in Dubai and Abu Dhabi through the reputed construction companies. Pumps are
            working in very good conditions.
          </p>
          <p>
            To ensure reliable performance and operations in the field, each and every pump is tested
            before it leaves the factory. And once our product leaves the factory, our experienced
            customer service network is there for you providing a full range of support services.
          </p>
          <p>
            The quality, reliability and overall performance of our products combined with our strong
            service support will result in lower total life cycle costs for your submersible
            equipment. The maximum parts of the pump are in stainless steel construction and a few
            parts are in aluminum alloys with PP coating for better and long life in corrosion
            conditions.
          </p>

          <h4 className="pledge-title">KPR'S PUMPS pledge to you…</h4>
          <ul className="pledge-list">
            <li>Quality and reliability in all our products</li>
            <li>Strong service and support after the sale</li>
            <li>Lower total life cycle equipment costs</li>
            <li>Maximum value for your investment</li>
          </ul>
        
         <div className="image-wrapper text-center mb-4">
          <img
  src="https://www.dewateringpumpsindia.net/images/companysmall.jpg"
  alt="KPR's Pumps Office"
  className="intro-image"
/>
        </div>
          <h5 className="vision-title">Vision :</h5>
          <p>
            To be the Leading Global Supplier of Submersible Dewatering pump Systems and services in
            Partnership with our customers to Enable them to consistently produce at the lowest Cost
            over the life Cycle of the Equipment.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Introduction;
