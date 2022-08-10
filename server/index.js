
require("dotenv").config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));
const router = express.Router()
const {getAll, addOne} = require('./controllers/personData.js')

router.get('/personData', getAll);
router.post('/personData', addOne);

app.listen(process.env.PORT, () => {
  console.log(`Web server running on: http://localhost:${process.env.PORT}`);
});

