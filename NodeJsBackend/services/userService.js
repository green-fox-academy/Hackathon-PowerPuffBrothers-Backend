const userRepository = require('../repositories/userRepository');

const createOrUpdateUser = (user, googleID) =>
  userRepository.createOrUpdateUser(user, googleID);
  const saveUser = user => userRepository.saveUser(user);

module.exports = {
  createOrUpdateUser,
  saveUser,
};
