import React from "react";
//import { useState, useEffect } from "react";
//import products from "../products";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
//import axios from 'axios'

const Homescreen = () => {
  //   const [products,setProducts]=useState([]);

  //   useEffect(() => {
  //     const fetchProducts=async()=>{
  //       const {data}=await axios.get('/api/products')
  //       setProducts(data)
  //     }
  //     fetchProducts()
  // }, []);
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h2 className="font-monospace text-center">Products</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Homescreen;
