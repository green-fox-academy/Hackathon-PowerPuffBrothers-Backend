const PORT = 3001;
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');



mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: 'PDFtemplateGenerator'
});

mongoose.set('useFindAndModify', false);

app.use(cors());
app.options('*', cors());
app.use(express.json());

const router = require('./routes/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;
