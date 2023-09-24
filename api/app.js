const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const DB_URL =
  'mongodb+srv://SamimZafar:Mydoor.97@cluster0.gf7czvk.mongodb.net/';
const app = express();
const router = require('./routes/index');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose
  .connect(DB_URL)
  .then(() => console.log('🚀 ~ Mongo DB Connected:'))
  .catch(err => () => console.log('🚀 ~ DB ERROR:', err));

app.use('/api', router);
module.exports = app;
