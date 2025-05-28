var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs= require('fs/promises')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(new Date())
    req.currentDate = new Date()
    next()
})

app.use((req, res, next) => { 
    const randomNum = Math.random()
    if(randomNum > 0.6 ){
        res.send('no puedes acceder')
    }else{
        next()    }
})

app.use(async(req, res, next) => {
    await fs.appendFile('./main.log', `Metodo: ${req.method}. URL: ${req.url}\n`)
    next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
