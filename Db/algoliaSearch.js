const algoliasearch = require('algoliasearch');

const { getTrips } = require('./index.js');
const db = require('./schema.js');

// ALGOLIA MOST RELEVANT
const client = algoliasearch('GQA3LGUNKB', process.env.ALGOLIA_API);
const index = client.initIndex('periTrips2');

const saveTripsAlgolia = () => {
  getTrips((err, trips) => {

    trips.map((trip) => {
      index.addObject({
        objectID: trip._id,
        username: trip.username,
        tripName: trip.tripName,
        destination: trip.destination,
        description: trip.description,
        thumbnail: trip.thumbnail,
        hashtag: trip.hashtag,
        upvotes: trip.upvotes,
        spots: trip.spots
      });
    });
  });
};

// add to the algolia db

const saveTripAlgolia = (trip) => {
  index.addObject({
    objectID: trip._id,
    username: trip.username,
    tripName: trip.tripName,
    destination: trip.destination,
    description: trip.description,
    thumbnail: trip.thumbnail,
    upvotes: trip.upvotes,
    hashtag: trip.hashtag,
    spots: trip.spots
  });
};

const updateUpvote = (trip, trip2) => {
  let data = trip._doc;
  let newTrip = {
    objectID: data._id,
    username: data.username,
    tripName: data.tripName,
    destination: data.destination,
    description: data.description,
    hashtag: data.hashtag,
    thumbnail: data.thumbnail,
    spots: data.spots, //save the spots ID in here
    upvotes: data.upvotes
  };

  trip2['objectID'] = trip2._id;

  let trips = [newTrip, trip2];
  index.saveObjects(trips, (err, content) => {
    if (err) {
      console.log('could not update withe upvote', err);
    } else {
      console.log('saved new upvote in algolia!');
    }
  });
};

const updateUpvotesDB = (data, cb) => {
  db.Trip.findOne({'_id': data._id}, (err, trip) => {
    if (err) {
      cb(err, null);
    } else {
      let oldTrip = Object.assign({}, trip);
      trip.upvotes++;
      console.log('Does this line rune 162');
      updateUpvote(oldTrip, trip);
      trip.save((err) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, trip.upvotes);
        }
      });
    }
  });
};

module.exports.saveTripsAlgolia = saveTripsAlgolia;
module.exports.saveTripAlgolia = saveTripAlgolia;
module.exports.updateUpvotesDB = updateUpvotesDB;
