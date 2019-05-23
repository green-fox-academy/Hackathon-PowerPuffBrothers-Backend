const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  googleID: { type: String, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
