import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dewateringPumps, nonClogPumps } from "../data/products";

const ProductSeries = () => {
  const renderProducts = (products) =>
    products.map((product) => (
      <Col key={product.id}>
        <Card className="h-100 shadow-lg">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Link to={`/products/${product.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Product Series</h2>

      <h3 className="mt-4 mb-3">Dewatering Pumps</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {renderProducts(dewateringPumps)}
      </Row>

      <h3 className="mt-5 mb-3">Non-Clog Pumps</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {renderProducts(nonClogPumps)}
      </Row>
    </Container>
  );
};

export default ProductSeries;
