import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();
//import products from "../data/products.js";

router.get("/api/products", asyncHandler(async(req, res) => {
    const products=await Product.find({})
  res.json(products);
}));

router.get("/api/products/:id", asyncHandler(async(req, res) => {
 // const product = products.find((p) => p._id === req.params.id); this is to fetch 
 //from an array like in a json file but now we r fetching frm db model,so use findbyid
 const product=await Product.findById(req.params.id)
  res.json(product);
}));

export default router;
