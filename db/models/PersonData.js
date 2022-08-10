const mongoose = require('mongoose');

const personDataSchema = new mongoose.Schema({
FirstName: String,
LastName: String,
Email: String,
Age: Number,
Weight: Number,
Gender: String,
FoodsEating: [String],
FoodsNotEating: [String],
Points: Number,
TimesLoggedIn: Number,
Rewards: [String],
Goals: [String],
DailyNotes: [{date: Date, text: String}]

})


const PersonData = mongoose.model('PersonData', personDataSchema);

module.exports = PersonData;