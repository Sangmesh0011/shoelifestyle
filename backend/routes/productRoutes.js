import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();
//import products from "../data/products.js";

router.get("/api/products", asyncHandler(async(req, res) => {
    const products=await Product.find({})
   // throw new Error('Could not find products')
    res.json(products);
}));

router.get("/api/products/:id", asyncHandler(async(req, res) => {
 // const product = products.find((p) => p._id === req.params.id); this is to fetch 
 //from an array like in a json file but now we r fetching frm db model,so use findbyid
 const product=await Product.findById(req.params.id)    
 if(product){
  return res.json(product)
 }
 else{
  res.status(404)
  throw new Error('Could not find the product')
 }
  
}));

export default router;
