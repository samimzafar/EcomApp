const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const DB_URL =
  'mongodb+srv://SamimZafar:Mydoor.97@cluster0.gf7czvk.mongodb.net/';
mongoose
  .connect(DB_URL)
  .then(() => console.log('🚀 ~ Mongo DB Connected:'))
  .catch(err => () => console.log('🚀 ~ DB ERROR:', err));
app.listen(port, () => console.log('🚀 ~ Server running on PORT = ', port));
