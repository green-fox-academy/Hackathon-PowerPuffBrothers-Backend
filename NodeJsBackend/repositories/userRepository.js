const User = require('../models/userModel');

const createOrUpdateUser = (user, googleID) => User.findOneAndUpdate({ googleID }, { $set: user }, { upsert: true }).exec();
const logBack = googleID => User.findOne({ googleID }).exec();
const saveUser = user => user.save();
const fillUp = reqInput => new User(reqInput);
module.exports = {
  createOrUpdateUser,
  logBack,
  saveUser,
  fillUp,
};