import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js'
// @desc Fetch all Products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
    const getProduct = await Product.find({});
    res.json(getProduct)

 })
 
// @desc Fetch Product by Id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const getProductbyId = await Product.findById(
        req.params.id
    );
    if (getProductbyId) {

        res.json(getProductbyId)
    }
    else {
        res.status(404).json({
            message: "Product not found"
        })
    }

 })

 export { getProducts, getProductById };