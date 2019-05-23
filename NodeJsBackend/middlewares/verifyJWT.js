const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7);
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: 'You are not authorized',
        });
      }
      req.googleID = decoded.googleID;
      req._id = decoded._id;
      req.tokenUsername = decoded.name;
      return next();
    });
  }
  return res.status(401).json({
    error: 'You are not authorized',
  });
};

module.exports = {
  verifyJWT,
};