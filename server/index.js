const PostData = require('./../db/models/PostData.js');
const PersonData = require('./../db/models/PersonData.js');


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
const {getAllPersonData, addOnePerson} = require('./controllers/personData.js')
const {addOnePost, getAllPosts} = require('./controllers/postData.js')

// router.get('/person', getAllPersonData);
// router.post('/person', addOnePerson);

// router.post('/', addOnePost);
// router.get('/post', getAllPosts);


app.post('/posts', (req, res) => {
  console.log(req.body)
  const newPostData = new PostData (req.body);
  console.log(newPostData);
  newPostData.save(function(err){
    if (err) {
      console.log(error)
    } else {
      console.log('saved new post into database');
      res.sendStatus(201);
    }
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Web server running on: http://localhost:${process.env.PORT}`);
});

