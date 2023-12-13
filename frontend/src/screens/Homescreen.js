import React from "react";
import { useState,useEffect } from "react";
//import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import axios from 'axios'

const Homescreen = () => {
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const fetchProducts=async()=>{
      const {data}=await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
}, []);
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
