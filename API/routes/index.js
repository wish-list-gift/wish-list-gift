const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page */
router.get("/wishlist", (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products)
        })
        .catch(err => console.log(err))
});

router.get('/wishlist/:productId', (req, res) => {
    Product.findById(req.params.productsId)
        .then((product) => {
            res.json(product)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/wishlist/new', (req, res) => {
    console.log("reached")
    Product.create(req.body)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.put('/movies/edit/:productId', (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, req.body)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            console.log(err)
        })
})




module.exports = router