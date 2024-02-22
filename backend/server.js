import dotenv from 'dotenv';
import express from 'express';
dotenv.config()

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

const port=process.env.PORT;
connectDB();
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)


app.listen(port,console.log(`App running on port ${port}`))
