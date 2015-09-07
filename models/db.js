var mongoose = require('mongoose');


//1- FIRST THING I NEED IS A CONNECTION STRING
var connectionString = 'mongodb://localhost/mistermgr'

//2- MAKE A CONNECTION TO A DATABASE
mongoose.connect(connectionString);

//3 LISTEN TO EVENTS AND LOG CHANGES...THIS IS IMPORTANT FOR DEBUGGING PURPOSES
mongoose.connection.on('connected', function(){
  console.log('Mogoose has connected to ' + connectionString);
});
mongoose.connection.on('disconnected', function(){
  console.log('Mogoose has disconnected from ' + connectionString);
});
mongoose.connection.on('error', function(error){
  console.log('Mogoose has connected experienced an error');
});
