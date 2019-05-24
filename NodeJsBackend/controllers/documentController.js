const userService = require('../services/userService');
const User = require('../repositories/userRepository');

const createUserController = (req, res) => {
  const correctHeader = req.headers['content-type'] === 'application/json';
  if (!correctHeader) {
    res.setHeader('content-type', 'application/json');
    return res.status(400).json({ error: 'Invalid headers.' });
  }
  const {
    lastName,
    firstName, dob, pob, email
  } = req.body;
  const newUser = User.fillUp(req.body);

  if (!lastName) {
    return res.status(400).json({ error: 'Missing last name.' });
  }
  if (!firstName) {
    return res.status(400).json({ error: 'Missing first name.' });
  }
  if (!dob) {
    return res.status(400).json({ error: 'Missing date of birth.' });
  }
  if (!pob) {
    return res.status(400).json({ error: 'Missing place of birth.' });
  }
  if (!email) {
    return res.status(400).json({ error: 'Missing e-mail address.' });
  }
  return userService
    .saveUser(newUser)
    .then((insertedUser) => {
      res.status(200).json(insertedUser);
    })
    .catch(() => {
      res.status(500).json({ error: 'Something went wrong, please try again later.' });
    });
};

module.exports = {
  createUserController,
};