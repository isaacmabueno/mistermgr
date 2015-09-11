var express = require('express');
var controller = express.Router();

var clientModel = require('../models/Client');
var bodyParser = require('body-parser');


//RESTful API!
// GET DOCUMENTATION PAGE
// controller.get('/documentation', function(req, res, next){
//   res.render('index', { title: 'Mister MGR API Documentation'});
// });

//get all
controller.get('/', function(req, res, next) {
  clientModel.find(function(error, clients) {
    if (error) return error;
    res.json(clients);
  });

});
//get by id
controller.get('/:id', function(req, res, next){
  clientModel.findById(req.params.id, function(error, client){
    if (error) return error;
    res.json(client);
  });
});

//create
controller.post('/', function(req,res, next){
  clientModel.create(req.body, function(error, client){
    if (error) return error;
    res.json(client)

  });
});

//update by id
controller.put('/:id', function(req, res, next){
  clientModel.findByIdAndUpdate(req.params.id, req.body, function (error, client){
    if (error) return error;
    res.json(client);
  });
});
controller.patch('/:id', function(req, res, next){
  clientModel.findByIdAndUpdate(req.params.id, req.body, function (error, client){
    if (error) return error;
    res.json(client);
  });
});
//delete by id
controller.delete('/:id', function(req, res, next){

  // use mandrill here to send email

  clientModel.findByIdAndRemove(req.params.id, req.body, function(error, client){
    if (error) return error;
    res.json({
  "Message": "User with the id of " + client.id + "has been removed!"
    });
  });
});
/* GET users listing. */
// controller.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
console.log('shes working!!!!!!')

module.exports = controller;
