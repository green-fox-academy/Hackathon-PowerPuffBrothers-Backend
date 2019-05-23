const { OAuth2Client } = require('google-auth-library');
const userRepository = require('../repositories/userRepository');

const verify = async function verify(idToken) {
  const clientID = process.env.CLIENT_ID;
  const client = new OAuth2Client(clientID);
  const ticket = await client.verifyIdToken({
    idToken,
    audience: clientID
  });
  return ticket.getPayload();
};

const logBack = googleId => userRepository.logBack(googleId);

module.exports = {
  verify,
  logBack
};
