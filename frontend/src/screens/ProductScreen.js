import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import {useDispatch} from 'react-redux'
//import axios from "axios";
//import add
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";
import {addToCart} from '../slices/cartSlice'
const ProductScreen = () => {
  //const [product, setProduct] = useState([]);
  const { id: productid } = useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [qty, setQty] = useState(1);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/api/products/${productid}`);
  //     setProduct(data);
  //   };
  //   fetchData();
  // }, [productid]);
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productid);
  const addToCartHandler=()=>{
    dispatch(addToCart({...product,qty}));
    navigate('/cart')
}
  return (
    <>
      <Link to="/">
        <MdOutlineArrowBack
          style={{ height: "30px", width: "80px", margin: "7", color: "black" }}
        />
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div>
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
                  <Rating
                    value={product.rating}
                    noofrevs={product.numReviews}
                  />
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
            <Col md={6} className="text-center fw-bolder">
              Select the Quantity :{" "}
            </Col>
            {product.countInStock > 0 && (
              <Col md={3}>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option className="text-center" key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            )}
            <Col md={3} className="text-center">
              <Button type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                <BsFillCartPlusFill /> <span>Add to Cart</span>
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
