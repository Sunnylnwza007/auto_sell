const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeID : {
        type:String,
        unique: true,
        lowercase: true
    },
    name: {
        type:String
    },
    tel: {
        type: String
    },
    address: {
        type: String
    },
    laborCost:{
        ttpe: String
    },
    position: {
        type: String
    },
    username : {
        type:String,
        unique: true,
        lowercase: true
    },
    password : {
        type:String
    }
})

const Employee = mongoose.model('mst_employees', employeeSchema);
module.exports = Employee;