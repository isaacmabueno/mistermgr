var express = require('express');
var controller = express.Router();

var clientModel = require('../models/Client');
var bodyParser = require('body-parser');

var mandrill = require('node-mandrill')('6X3OXqxTBCyYB5xgoxGLpg');



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

  //use mandrill here to send an email

  clientModel.findByIdAndRemove(req.params.id, req.body, function(error, client){
    if (error) return error;
    res.json({
  "Message": "User with the id of " + client.id + "has been removed!"
    });
  });
});

// controller.______('/:id', function(req, res, next){

// })



controller.post('/email', function(req, res, next) {

  console.log('req dat body');
  console.log(req.body);


  mandrill('/messages/send', {
    message: {
        to: [{email: req.body['emailAddress'], name: req.body['businessName']}],
        from_email: 'Info@urbanstreetwindowworks.com',
        subject: "Urban Street Cleaning Complete",
        text: req.body['businessName'] + ", " + "\n" + "\n" +"Urban Street Window Works was just in " + req.body['neighborhood'] + " and cleaned your windows." + "\n" + " Thank you for you business and have a great day!" + "\n" + "\n" + "<3 Urban Street"
      }
    }, function(error, response)
    {
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
    res.json(response);

    });
});

/* GET users listing. */
// controller.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
console.log('shes working!!!!!!')

module.exports = controller;
