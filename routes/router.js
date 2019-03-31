const express = require('express')
const Router = express.Router()
const User = require('../models/user')
const Customer = require('../models/customer')
const Product = require('../models/product')
const Log = require('../models/log')
var username;

Router.route('/').get(function (req, res) {
    res.render('login', { status: 0, message: "", user: "" })
});

//Sunny (start)
Router.post('/Main', (req, res) => {
    username = req.body.user
    var pass = req.body.pass
    console.log(username)
    User.findOne({ 'username': username }, (err, result) => {
        if (err) { console.log(err) }
        console.log(result)

        if (result) {
            if (result.password == pass) {
                var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
                console.log(date)
                var login = new Log({
                    username: username,
                    log: "login " + date
                })
                login.save();

                res.render('Main', { username });
            } else {
                console.log("Password wrong");
                res.render('login', { status: 2, message: "Password wrong", user: username })
            }
        } else {
            console.log("Username not found");
            res.render('login', { status: 1, message: "Username not found", user: "" })
        }
    })

})

Router.get('/Main', (req, res) => {
    res.render('Main')
})

Router.get('/register', (req, res) => {
    res.render('register')
})

Router.get('/forget', (req, res) => {
    res.render('forget')
})

Router.get('/login', (req, res) => {
    var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    console.log(date)
    var logout = new Log({
        username: username,
        log: "logout " + date
    })
    logout.save();
    res.render('login', { status: 0, message: "" ,user: ""})
})



//Sunny (end)



//Arm
Router.get('/customerData', (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerData', { data: customer });
        }
    })
})

Router.get('/customerData/:name', (req, res) => {
    console.log(req.params.name);
    Customer.find({ name: req.params.name }, function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerData', { data: customer });
        }
    })
})

Router.post('/customerData/find', (req, res) => {
    var find = ".*" + req.body.search + ".*"
    Customer.find({ "name": { $regex: find } }, (err, result) => {
        console.log(result)
        res.render('customerData', { data: result })
    })
})

//Arm end

//Best
Router.get('/customerBuy', (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerBuy', { data: customer });
        }
        console.log("ShowDataPass")
    })
})

Router.post('/customerBuy/find', (req, res) => {
    var find = ".*" + req.body.search + ".*"
    Customer.find({ "name": { $regex: find } }, (err, result) => {
        console.log(result)
        res.render('customerBuy', { data: result })
    })
})

Router.post('/customerBuy/submit', (req, res) => {
    var newCus = new Customer({
        name: req.body.name,
        num: req.body.num,
        birthday: req.body.birthday,
        tel: req.body.tel,
        address: req.body.address
    })
    console.log(newCus)
    Customer.insertMany(newCus).then(() => {

        console.log("----------- InsertPass -----------")
        res.redirect('/customerBuy')
    })
})

Router.get('/customerBuy/:id', (req, res) => {
    Customer.find({ id: req.params.id }, function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerBuy', { data: customer });
        }
    })
})

//Best end




//Mine
Router.get('/customerRepair', (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerRepair', { data: customer });
        }
        console.log("ShowDataPass")
    })
})

Router.post('/customerRepair/find', (req, res) => {
    var find = ".*" + req.body.search + ".*"
    Customer.find({ "name": { $regex: find } }, (err, result) => {
        console.log(result)
        res.render('customerRepair', { data: result })
    })
})

Router.post('/customerRepair/submit', (req, res) => {
    var newCus = new Customer({
        name: req.body.name,
        num: req.body.num,
        birthday: req.body.birthday,
        tel: req.body.tel,
        address: req.body.address
    })
    console.log(newCus)
    Customer.insertMany(newCus).then(() => {

        console.log("----------- InsertPass -----------")
        res.redirect('/customerRepair')
    })
})

Router.get('/customerRepair/:id', (req, res) => {
    Customer.find({ id: req.params.id }, function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerRepair', { data: customer });
        }
    })
})
//Mine end

//Folk
Router.get('/productInformation', (req, res) => {
    Product.find(function (err, product) {
        if (err) {
            return err;
        } else {
            res.render('productInformation', { data: product });
        }
    })
})

Router.get('/productInformation/:name', (req, res) => {
    var names = req.params.name;
    Product.find({ brand: names }, function (err, result) {
        if (err) {
            return err;
        } else {
            res.render('productInformation', { data: result });
        }
    })
})
//Folk end

//Glass
Router.get('/customerSell', (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerSell', { data: customer });
        }
        console.log("ShowDataPass")
    })
})

Router.post('/customerSell/find', (req, res) => {
    var find = ".*" + req.body.search + ".*"
    Customer.find({ "name": { $regex: find } }, (err, result) => {
        console.log(result)
        res.render('customerSell', { data: result })
    })
})

Router.post('/customerSell/submit', (req, res) => {
    var newCus = new Customer({
        name: req.body.name,
        num: req.body.num,
        birthday: req.body.birthday,
        tel: req.body.tel,
        address: req.body.address
    })
    console.log(newCus)
    Customer.insertMany(newCus).then(() => {

        console.log("----------- InsertPass -----------")
        res.redirect('/customerSell')
    })
})

Router.get('/customerSell/:id', (req, res) => {
    Customer.find({ id: req.params.id }, function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerSell', { data: customer });
        }
    })
})
//Glass end

//Bank
Router.get('/customerRegis', (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerRegis', { data: customer });
        }
        console.log("ShowDataPass")
    })
})

Router.post('/customerRegis/find', (req, res) => {
    var find = ".*" + req.body.search + ".*"
    Customer.find({ "name": { $regex: find } }, (err, result) => {
        console.log(result)
        res.render('customerRegis', { data: result })
    })
})

Router.post('/customerRegis/submit', (req, res) => {
    var newCus = new Customer({
        name: req.body.name,
        num: req.body.num,
        birthday: req.body.birthday,
        tel: req.body.tel,
        address: req.body.address
    })
    console.log(newCus)
    Customer.insertMany(newCus).then(() => {

        console.log("----------- InsertPass -----------")
        res.redirect('/customerRegis')
    })
})

Router.get('/customerRegis/:id', (req, res) => {
    Customer.find({ id: req.params.id }, function (err, customer) {
        if (err) {
            return err;
        } else {
            res.render('customerRegis', { data: customer });
        }
    })
})
//Bank end


module.exports = Router;