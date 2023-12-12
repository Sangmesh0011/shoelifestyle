import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productid } = useParams();
  const product = products.find((p) => p._id === productid);

  return (
    <div className="">
      <Link to="/">
        <MdOutlineArrowBack
          style={{ height: "30px", width: "80px", margin: "7", color: "black" }}
        />
      </Link>
      <Row className="m-2 p-3">
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={7}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              Brand : <strong>{product.brand}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} noofrevs={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item className="fs-4">
              <strong>${product.price}</strong>
            </ListGroup.Item>

            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="m-2 p-3">
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              Stock status :
              <strong>
                {" "}
                {product.countInStock > 0 ? "In Stock" : "Out of stock"}
              </strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              Category:
              <strong> {product.category}</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="m-2 p-3 justify-content-center">
        <Col md={6} className="text-center">
          <Button type='button' disabled={product.countInStock === 0}>
          
              <BsFillCartPlusFill /> <span>Add to Cart</span>
            
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
