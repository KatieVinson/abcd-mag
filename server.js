var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


app.use('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/npm', express.static(path.join(__dirname, 'node_modules')));
app.use('/images', express.static(path.join(__dirname + 'public/images')));
// catch 404 and forward to error handler


app.listen(3000, function() {
    console.log('App listening on port 3000')
})