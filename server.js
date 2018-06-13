var express = require('express');
var path = require('path');
var bp = require('body-parser');
var fs = require('fs');
var ejsLayouts = require('express-ejs-layouts');
require('dotenv').config();

var app = express();

app.use (express.static(path.join(__dirname, 'static')));
app.use(ejsLayouts);
app.use(bp.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/upload', function(req, res) {
  res.render('upload');
});

app.post('/upload', function(req, res) {
  res.send('the load was up.');
});


app.listen(process.env.PORT || 3000);
