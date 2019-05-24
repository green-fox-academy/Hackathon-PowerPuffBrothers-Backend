const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String},
  googleID: { type: String},
  picture: { type: String},
  lastName: {type: String, required: true},
  firstName: {type: String, required: true},
  dob: {type: String, required: true},
  pob: {type: String, required: true},
  email: {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);
