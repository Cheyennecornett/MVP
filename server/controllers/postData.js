const PostData = require('../../db/models/PostData.js');


exports.getAllPosts = (req, res) => {
  PostData.find({}).then((posts) => {
    console.log(posts)
    res.send(posts);
  })
}


exports.addOnePost = (req, res) => {
  console.log('post', req.body)

  const newPostData = new PostData (req.body);
  console.log(newPostData);
  newPersonData.save(function(err){
    if (err) {
      console.log(error)
    } else {
      console.log('saved new post into database');
      res.sendStatus(201);
    }
  })
}