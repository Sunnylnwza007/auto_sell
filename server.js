const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const path = require('path')
const port = 3000;
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://admin:admin1@ds127646.mlab.com:27646/auto_sell');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const Router2 = require('./routes/router');

app.get('/',(req,res)=>{
    res.render('login',{status: 0 , message : "",user: ""})
});

app.use('/', Router2);






app.listen(port,()=>{

    console.log(port)
})