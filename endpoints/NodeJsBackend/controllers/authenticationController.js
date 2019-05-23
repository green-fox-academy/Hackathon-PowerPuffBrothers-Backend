const { createOrUpdateUser } = require('../services/userService');
const { verify, logBack } = require('../services/authenticationService');
const jwt = require('jsonwebtoken');

const googleVerification = (req, res) => {
  const { headers } = req;
  const { googletoken } = headers;

  verify(googletoken)
    .then((response) => {
      const { name, sub: googleID, picture } = response;
      const user = {
        name,
        picture,
        googleID,
      };
      createOrUpdateUser(user, googleID)
        .then((userResp) => {
          const { _id } = userResp;
          const authToken = jwt.sign({ name, _id, googleID }, process.env.JWT_SECRET);
          return res.status(200).json({
            name, _id, picture, authToken,
          });
        })
        .catch(() => {
          res
            .status(500)
            .json({ error: 'Something went wrong, please try again later.' });
        });
    })
    .catch(() => {
      res.status(401).json({ error: 'Authorization failed.' });
    });
};

const logBack = (req, res) => {
  logBack(req.googleID).then((user) => {
    res.status(200).json(user);
  }).catch(() => {
    res.status(401).json({ error: 'Authization failed.' });
  });
};

module.exports = {
  googleVerification,
  logBack,
};
