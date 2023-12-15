import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js';
const port=process.env.PORT;
connectDB();
const app=express()
app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use(productRoutes);


app.listen(port,console.log(`App running on port ${port}`))
