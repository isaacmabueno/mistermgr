var mongoose = require('mongoose');

// I need to declare a SCHEMA.. a blueorint for what every
// individual object in my collection should look like
var ClientSchema = new mongoose.Schema({
  businessName: String,
  address: String,
  neighborhood: String,
  emailAddress: String,
  phone: String,
  plan: String,
  contactName: String,
  specialInstructions: String,
  date: Date
});



// 2 export our model
//mongoose.model('string name of model', schema);
module.exports = mongoose.model("Client", ClientSchema)
