const PersonData = require('../../db/models/PersonData.js');

exports.getAllPersonData = (req, res) => {
  PersonData.find({}).then((people) => {
    console.log(people)
    res.send(people);
  })
}


exports.addOnePerson = (req, res) => {
  console.log('post', req.body)

  const newPersonData = new PersonData (req.body);
  console.log(newPersonData);
  newPersonData.save(function(err){
    if (err) {
      console.log(error)
    } else {
      console.log('saved new person into database');
      res.sendStatus(201);
    }
  })
}