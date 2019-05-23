const User = require('../models/userModel');

const createOrUpdateUser = (user, googleID) => User.findOneAndUpdate({ googleID }, { $set: user }, { upsert: true }).exec();
const logBack = googleID => User.findOne({ googleID }).exec();
module.exports = {
  createOrUpdateUser,
  logBack,
};