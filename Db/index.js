//  REQUIRE
const mongoose = require('mongoose');
const { User, Trip, Spot, Fork } = require('./schema.js')

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


// const data: {
//   username: 'huynh.r.k@gmail.com',
//   tripName: 'vacation in bali',
//   destination: 'Bali',
//   description: 'vacay after the bootcamp!',
//   thumbnail: 'https://goo.gl/HCgNo1',
//   spots: [
//     {
//       spotName: 'beach1',
//       description: 'description for this spot hello world'
//       long: 8.3405,
//       lat: 115.0920,
//       elevation: 32,
//       photo: 'https://goo.gl/fdc8y3',
//     },
//     {
//       spotName: 'beach2',
//       description: 'description for this spot hello world'
//       long: 8.3403,
//       lat: 115.0921,
//       elevation: 52,
//       photo: 'https://goo.gl/WXtpYx',
//     }
//   ]
// }


const saveNewUser = (data) => {

  const newUser = new User({
    username: 'thebkr11@gmail.com',
    sessionID: '879234354'
  });

  newUser.save((err) => {
    if (err) {
      return err;
    } else{
      console.log('successfully saved to the database.');
    }
  })

}

const saveNewTrip = (data, cb) => {
  // find the user
    User.findOne({username: data.username}, (err, user) => {
    if (err) {
      console.log('could not find the user'); //will add a callback here later
    } else {
      console.log('usernot found');
    // create a new trip
      const newTrip = new Trip({
        username: user,
        tripName: data.tripName,
        destination: data.destination,
        description: data.description,
        thumbnail: data.thumbnail,
        spots: []
      });

      // loop through the spots
      data.spots.map((spot) => {
        // create a new spot
        const newSpot = new Spot({
          // add the tripID into each new spot
          tripID: newTrip._id,
          spotName: spot.spotName,
          description: spot.description,
          long: spot.long,
          lat: spot.lat,
          elevation: spot.elevation,
          photo: spot.photo
        });
        // add the spotID into the trips
        newTrip.spots.push({spotID: newSpot._id})
        // save the new spot
        newSpot.save((err) => {
          if (err) {
            return err;
          } else {
            console.log('succesfully saved spot');
          }
        });
      }, () => {
        console.log('will this line rune?')
        newTrip.save((err) => {
          if (err) {
            return err;
          } else {
            console.log('succesfully saved trip') // will add callback ehre later
          }
        });
      });
      // save the trip
    }
  });
}

module.exports.saveNewUser = saveNewUser;
module.exports.saveNewTrip = saveNewTrip;