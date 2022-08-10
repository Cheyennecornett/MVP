const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

const personDataSchema = new mongoose.Schema({
FirstName: String,
LastName: String,
Email: {type: String, unique: true},
Birthday: Date,
Gender: String,
FoodsEating: [String],
FoodsWantToEat: [String],
Points: {type: Number, default: 1},
TimesLoggedIn: {type: Number, default: 1},
Rewards: [String],
Goals: [String],
DailyNotes: [{date: Date, text: String}],
Username: String,
Password: String
})

personDataSchema.plugin(uniqueValidator);
mongoose.set('setDefaultsOnInsert', true);

const PersonData = mongoose.model('PersonData', personDataSchema);
 const test = new PersonData({FirstName: "cheyenne", LastName: "cornett", Email: "cheyenne.cornett22@gmail.com", Gender: "Female", FoodsEating: ["apple", "cheese"], FoodsWantToEat: ["chicken", "pasta"], Rewards: ["ipad time", "zoo"], Goals: ["eat more family meals"], Username: "shiba", Password: "nation"})
test.save(function(err) {
  if (err) {
    console.log('err saving', err)
  } else {
    console.log('saved personData to db!')
  }
})
module.exports = PersonData;

