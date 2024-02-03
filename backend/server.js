// console.log("Hello")

import express from 'express'

import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './Routes/productRoutes.js'


const app = express();
dotenv.config();
connectDB();

app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Api is running")
})


app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`)
})