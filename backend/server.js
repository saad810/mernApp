// console.log("Hello")

import express from 'express'
import products from './data/products.js';
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Api is running")
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const getProduct = products.find((product) => product._id === req.params.id);
    res.json(getProduct)
})

app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`)
})