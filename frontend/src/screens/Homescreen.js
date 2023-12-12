import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

const Homescreen = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
