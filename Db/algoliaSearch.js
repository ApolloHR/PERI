const algoliasearch = require('algoliasearch');

const { getTrips } = require('./index.js');

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
    spots: trip.spots
  });
};

module.exports.saveTripsAlgolia = saveTripsAlgolia;
module.exports.saveTripAlgolia = saveTripAlgolia;

// Search for all the users
// Search for all the trips
// Search for all the spots

// pull in any mongoose dependencies

