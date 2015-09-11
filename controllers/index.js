var express = require('express');
var controller = express.Router();

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

controller.get('/angular', function(req, res, next){
  res.render('angular', {title: "mistermgr"});
});

module.exports = controller;
