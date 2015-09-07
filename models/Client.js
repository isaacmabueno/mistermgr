var mongoose = require('mongoose');

// I need to declare a SCHEMA.. a blueorint for what every
// individual object in my collection should look like
var ClientSchema = new mongoose.Schema({
  BusinessName: String,
  Address: String,
  Neighborhood: String,
  EmailAddress: String,
  Phone: String,
  Plan: String,
  ContactName: String,
  SpecialInstructions: String
});



// 2 export our model
//mongoose.model('string name of model', schema);
module.exports = mongoose.model("Client", ClientSchema)
