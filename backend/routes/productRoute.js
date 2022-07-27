import express from 'express'
import AsyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


router.get('/', AsyncHandler(async(req, res) => {
    const products = await Product.find({})
    throw new Error('Some error')
    res.json(products)
}))

router.get('/:id', AsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

        if(product){
            res.json(product)
        } else {
            res.status(404).json({ message: 'Product not found'})
        }
    
}))

export default router