var express = require('express');
var path = require('path');
var logger = require('morgan');
var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
