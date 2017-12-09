//  REQUIRE
const mongoose = require('mongoose');
const { User } = require('./schema.js')

// FOR .ENV VARIABLES
require('dotenv').config();
// MONGOOSE PROMISES DEPRICATED IMPORT PROMISE
mongoose.Promise = require('bluebird');
// CONNECT MONGOOSE TO LOCAL HOST OR MLAB
mongoose.connect(
  'mongodb://localhost/peri' ||
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`,
  {userMongoClient: true});
const db = mongoose.connection;
// CONNECTION
db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', () => {
  console.log('Successfully connected to database.');
});


const saveNewUser = (data) => {

  const newUser = new User({
    username: 'thebkr11@gmail.com',
    sessionID: '879234354'
  });

  newUser.save((err) => {
    if (err) {
      return err
    } else{
      console.log('successfully saved to the database.')
    }
  })

}

module.exports.saveNewUser = saveNewUser;