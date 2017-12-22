const algoliasearch = require('algoliasearch');

const { getTrips } = require('./index.js');

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

module.exports.saveTripsAlgolia = saveTripsAlgolia;
module.exports.saveTripAlgolia = saveTripAlgolia;
