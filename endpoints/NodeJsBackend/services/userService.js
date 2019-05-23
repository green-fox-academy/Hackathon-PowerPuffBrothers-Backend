const userRepository = require('../repositories/userRepository');

const createOrUpdateUser = (user, googleID) =>
  userRepository.createOrUpdateUser(user, googleID);

module.exports = {
  createOrUpdateUser
};
