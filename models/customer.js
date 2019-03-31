const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cusSchema = new Schema({
     name: String,
     num: { unique : true, type : String},
     birthday: String,
     tel : String,
     address: String
 })
 
 const customer = mongoose.model('mst_customers', cusSchema);
 module.exports = customer;