const express = require('express');
const { verifyJWT } = require('../middlewares/verifyJWT')
const router = express.Router();
const {
  googleVerification,
  logBack,
} = require('../controllers/authenticationController');
const { uploadController } = require('../controllers/uploadController')
const { createUserController } = require('../controllers/documentController')


router.get('/auth', googleVerification)
router.get('/me', verifyJWT, logBack)
router.post('/upload',verifyJWT, uploadController)
router.post('/create', createUserController)

module.exports = router;
