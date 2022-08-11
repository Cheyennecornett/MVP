const mongoose = require('mongoose');


const postDataSchema = new mongoose.Schema({
  date_written: {type: Date, default: Date.now},
  user: String,
  FoodsTriedToday: String,
  Rating: String,
  Moto: String

  })


  // mongoose.set('setDefaultsOnInsert', true);

  const PostData = mongoose.model('PostData', postDataSchema);

  module.exports = PostData;