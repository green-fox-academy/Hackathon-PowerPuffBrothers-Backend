const express = require('express');
const { verifyJWT } = require('../middlewares/verifyJWT');
const router = express.Router();
const {
  googleVerification,
  logBack
} = require('../controllers/authenticationController');
const { uploadController } = require('../controllers/uploadController');
const multer = require('multer');
const gridFsStorage = require('multer-gridfs-storage');
const grid = require('gridfs-stream');
const crypto = require('crypto');
const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.CONNECTION_STRING);
let gfs;
conn.once('open', () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('PDFtemplateGenerator');
});

const storage = new gridFsStorage({
  url: process.env.CONNECTION_STRING,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'PDFtemplateGenerator'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

const { createUserController } = require('../controllers/documentController');

router.get('/auth', googleVerification);
router.get('/me', verifyJWT, logBack);
router.post('/upload', verifyJWT, upload.single('file'), uploadController);
router.post('/create', createUserController);

module.exports = router;
