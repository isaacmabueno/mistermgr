var express = require('express');
var controller = express.Router();

var clientModel = require('../models/Client');
var bodyParser = require('body-parser');


//RESTful API!

//get all
controller.get('/', function(req, res, next) {
  clientModel.find(function(error, clients) {
    if (error) return error;
    res.json(clients);
  });

});
//get by id

//create

//update by id

//delete by id

/* GET users listing. */
// controller.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
console.log('shes working!!!!!!')

module.exports = controller;
