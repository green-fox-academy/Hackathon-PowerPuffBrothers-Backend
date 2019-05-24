const multer = require('multer');
const gridFsStorage = require('multer-gridfs-storage');
const grid = require('gridfs-stream');

const uploadController = (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*"
  }).send(req.body)

};

module.exports = {
  uploadController
};
