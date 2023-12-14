import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from './data/products.js'
import connectDB from "./config/db.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("data import successful".green.inverse);
    process.exit();
  } catch (error) {
    console.log("data import failed".red.inverse,error);
    process.exit(1);
  }
};

const destroyData=async()=>{
    
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data destroy successful".red.inverse);
    process.exit();
  } catch (error) {
    console.log("data import failed".red.inverse);
    process.exit(1);
  }
    
}

if (process.argv[2]==='-d'){
  destroyData();
}
else{
  importData();
}