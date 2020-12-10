const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    link: String,
    price: Number,
    image: String,
    notes: String
})



module.exports = mongoose.model('Product', productSchema, 'products')