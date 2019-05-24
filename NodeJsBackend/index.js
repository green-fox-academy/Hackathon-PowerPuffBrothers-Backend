const PORT = 3001;
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: 'PDFtemplateGenerator'
});

mongoose.set('useFindAndModify', false);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.use(express.json());

const router = require('./routes/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;
