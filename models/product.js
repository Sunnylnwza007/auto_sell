const mongoose = require('mongoose');

var productSchema = mongoose.Schema({ 
    id: String,
    brand : String,
    carModel: String,
    serie: String,
    amount: String,
    price: String,
    color: String
});

const product = mongoose.model('mst_products', productSchema);
module.exports = product;