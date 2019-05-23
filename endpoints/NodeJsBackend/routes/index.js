const express = require('express');
const { verifyJWT } = require('../middlewares/verifyJWT')
const router = express.Router();
const {
  googleVerification,
  logBack,
} = require('../controllers/authenticationController');

router.get('/auth', googleVerification)
router.get('/me', verifyJWT, logBack)


module.exports = router;
