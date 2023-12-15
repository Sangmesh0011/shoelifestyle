import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
  
const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 lh-sm" style={{boxShadow: '2px 7px 4px 0.3px grey'}}>
        <Link to={`/product/${product._id}`}>
          <Card.Img style={{height: '200px'}}src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="fw-light">
              <strong style={{textDecoration:'none'}}>{product.name}</strong>
            </Card.Title>
          </Link>
          <span><Rating value={product.rating} noofrevs={product.numReviews}/></span>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
