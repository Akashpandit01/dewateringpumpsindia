// src/components/ProductCards.jsx
import React from "react";
import "./ProductCards.css";

const cardData = [
  {
    image: "https://www.dewateringpumpsindia.net/images/dewatering-pumps.jpg",
    title: "Dewatering Pumps",
    description: "KPR'S Dewatering Submersible Pumps, known for job site dependability. Pumps are constructed of strong die cast aluminum and stainless steel body parts."
  },
  {
    image: "https://www.dewateringpumpsindia.net/images/ak-1.5350-2p.jpg",
    title: "Electric Submersible Dewatering Pumps (AK - 1.5350 - 2P)",
    description: "KPR'S Dewatering Submersible Pumps, known for job site dependability. Pumps are constructed of strong die cast aluminum and stainless steel body parts."
  },
  {
    image: "https://www.dewateringpumpsindia.net/images/ak-8350-2p.jpg",
    title: "Electric Submersible Dewatering Pumps (AK - 8350 - 2P)",
    description: "8HP (6KW)/30/50Hzl415Volt, 2850 RPM DOL Start squirrel cage continuous rated induction motor, insulation Class F (155°C)."
  },
  {
    image: "https://www.dewateringpumpsindia.net/images/ak-small-series.jpg",
    title: "Electric Submersible Dewatering Pumps (AK - Small Series)",
    description: "KPR`S dewatering submersible pumps, known for job site dependability. Pumps are constructed of strong die cast aluminum and stainless steel body parts;"
  },
  {
    image: "https://www.dewateringpumpsindia.net/images/heavy-duty-castings.jpg",
    title: "Heavy Duty Castings For Last Long",
    description: "All KPR' S pump models are constructed of strong die cast aluminum top cover & bottom cover with sand blasted and epoxy coated for last long."
  },
  {
    image: "https://www.dewateringpumpsindia.net/images/non-clog-pumps.jpg",
    title: "Non-Clog Pumps",
    description: "KPR'S PUMPS is manufacture and supplier for Nonclog Pumps. Our Experts had designed best Nonclog Pumps Model"
  }
];

const ProductCards = () => (
  <div className="container my-5">
    <h3 className="text-center text-warning fw-bold mb-4">Manufacturer, Supplier, Exporter </h3>
    <div className="divider-ribbon d-flex align-items-center justify-content-center mb-4">
  <hr className="flex-grow-1 mx-2 border-warning" />
  <span className="ribbon-icon text-warning fs-3">🎀</span>
  <hr className="flex-grow-1 mx-2 border-warning" />
</div>
    <div className="row g-4">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-4 col-sm-6">
          <div className="card h-100 product-card shadow-sm">
            <img
              src={card.image}
              alt={card.title}
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase fw-bold text-dark">
                {card.title}
              </h5>
              <p className="card-text text-muted">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductCards;
