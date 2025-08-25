import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const dewateringPumps = [
  { name: "AK-1-5150-2P", image: "/images/AK-1-5150-2P.jpg", link: "/products/AK-1-5150-2P" },
  { name: "AK-1.5350-2P", image: "/images/AK-1.5350-2P.jpg", link: "/products/AK-1-5350-2P" },
  { name: "AK-1.5360-2P", image: "/images/AK-1.5360-2P.jpg", link: "/products/AK-1-5360-2P" },
  { name: "AK-2350-2P", image: "/images/AK-2350-2P.jpg", link: "/products/AK-2350-2P" },
  { name: "AK-3350-2P", image: "/images/AK-3350-2P.jpg", link: "/products/AK-3350-2P" },
  { name: "AK-6350-2P", image: "/images/AK-6350-2P.jpg", link: "/products/AK-6350-2P" },
  { name: "AK-8350-2P", image: "/images/AK-8350-2P.jpg", link: "/products/AK-8350-2P" },
  { name: "AK-8350h-2P", image: "/images/AK-8350h-2P.jpg", link: "/products/AK-8350h-2P" },
  { name: "AK-10350-2P", image: "/images/AK-10350-2P.jpg", link: "/products/AK-10350-2P" },
  { name: "AK-15350-2P", image: "/images/AK-15350-2P.jpg", link: "/products/AK-15350-2P" },
  { name: "AK-35350m-L-2P", image: "/images/AK-35350m-L-2P.jpg", link: "/products/AK-35350m-L-2P" },
  { name: "AK-Small-series", image: "/images/AK-Small-series.jpg", link: "/products/AK-Small-series" },
  { name: "Technical Specification", image: "/images/technical-specs.jpg", link: "/products/technical-specs" }
];

const nonClogPumps = [
  { name: "SK 3350 NC", image: "/images/SK-3350-NC.jpg", link: "/products/SK-3350-NC" },
  { name: "SK 6350 NC", image: "/images/SK-6350-NC.jpg", link: "/products/SK-6350-NC" },
  { name: "SK 8350 NC", image: "/images/SK-8350-NC.jpg", link: "/products/SK-8350-NC" },
  { name: "SK 10350 NC", image: "/images/SK-10350-NC.jpg", link: "/products/SK-10350-NC" }
];

const Products = () => {
  const renderCards = (products) =>
    products.map((product, index) => (
      <Col key={index}>
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column text-center">
            <Card.Title>{product.name}</Card.Title>
            <Link to={product.link} className="mt-auto">
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container className="py-5">
      <h2 className="section-title">Product Series</h2>

      {/* Dewatering Pumps Section */}
      <section className="mb-5">
        <Row className="align-items-center g-4">
          <Col md={5} className="text-center">
            <img
              src="/images/dewatering-pumps.jpg"
              alt="Dewatering Pumps"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={7}>
            <h3 className="section-title">Dewatering Pumps / Dewatering Submersible Pumps</h3>
            <p>
              We are Manufacturer, Supplier, Exporter of Dewatering Pumps / Dewatering Submersible
              Pumps and Our setup is situated at Pune, Maharashtra, India.
            </p>
            <p>
              KPR'S Dewatering Submersible Pumps, known for job site dependability. Pumps are
              constructed of strong die cast aluminum and stainless steel body parts; they are fitted
              with stainless steel hardened impellers and field adjustable nitrile rubber diffuser.
              The upper and lower mechanical seals are wholly enclosed in an oil chamber. These pumps
              do not have to be totally submerged and can operate under snore conditions if necessary.
            </p>
            <h5>Salient Features :</h5>
            <ul>
              <li>Corrosion/abrasion resistant impeller</li>
              <li>Heavy duty castings last long</li>
              <li>Long life seals</li>
              <li>Wear resistant steel oil chamber</li>
              <li>High performance submersible motor</li>
              <li>Can be operated under snore conditions if necessary</li>
            </ul>
          </Col>
        </Row>
      </section>

      <h3 className="mb-3">Dewatering Pumps</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {renderCards(dewateringPumps)}
      </Row>

      {/* Non-Clog Pumps Section */}
      <section className="mt-5 mb-5">
        <Row className="align-items-center g-4">
          <Col md={5} className="text-center order-md-2">
            <img
              src="/images/non-clog-pumps.jpg"
              alt="Non-Clog Pumps"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={7} className="order-md-1">
            <h3 className="section-title">Non-Clog Submersible Pumps</h3>
            <p>
              We are Manufacturer, Supplier, Exporter of Non Cl clog Submersible Pumps and Our setup is
              situated at Pune, Maharashtra, India.
            </p>
            <p>
              KPR'S PUMPS is manufacture and supplier for Nonclog Pumps. Our Experts had designed best
              Nonclog Pumps Model which is essentially very useful for industrial as well as individual
              purposes. KPR's Pumps is manufacturing best solution in Nonclog Pumps.
            </p>
            <h5>Electric Submersible Non-Clog Pump Series :</h5>
            <ul>
              <li>ELECTRIC SUBMERSIBLE NON-CLOG PUMP SK 3350 NC</li>
              <li>ELECTRIC SUBMERSIBLE NON-CLOG PUMP SK 6350 NC</li>
              <li>ELECTRIC SUBMERSIBLE NON-CLOG PUMP SK 8350 NC</li>
              <li>ELECTRIC SUBMERSIBLE NON-CLOG PUMP SK 10350 NC</li>
            </ul>
          </Col>
        </Row>
      </section>

      <h3 className="mb-3">Non-Clog Pumps</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {renderCards(nonClogPumps)}
      </Row>
    </Container>
  );
};

export default Products;
