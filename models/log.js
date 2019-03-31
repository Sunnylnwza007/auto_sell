const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    username:{
        type: String
    },
    log :{
        type: String
    }
 })
 
 const Log = mongoose.model('logs', logSchema);
 module.exports = Log;