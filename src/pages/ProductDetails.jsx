import React from "react";
import { useParams, Link } from "react-router-dom";
import { dewateringPumps, nonClogPumps } from "../data/products";
import { Container, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const allProducts = [...dewateringPumps, ...nonClogPumps];
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return <Container className="py-5"><h2>Product not found</h2></Container>;
  }

  return (
    <Container className="py-5">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3 rounded shadow"
        style={{ maxWidth: "600px" }}
      />
      <p>
        Detailed information about {product.name} goes here.
        You can include specifications, features, and usage.
      </p>
      <Link to="/products">
        <Button variant="secondary">Back to Products</Button>
      </Link>
    </Container>
  );
};

export default ProductDetails;
