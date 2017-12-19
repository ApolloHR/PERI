const algoliasearch = require('algoliasearch');

const { getTrips } = require('./index.js');

const client = algoliasearch('GQA3LGUNKB', process.env.ALGOLIA_API);
const index = client.initIndex('periTrips');

const saveTripsAlgolia = () => {
  getTrips((err, trips) => {

    trips.map((trip) => {
      index.addObject({
        objectID: trip._id,
        username: trip.username,
        tripName: trip.tripName,
        description: trip.description,
        thumbnail: trip.thumbnail,
        spots: trip.spots
      });
    });
  });
};

module.exports.saveTripsAlgolia = saveTripsAlgolia;
// Search for all the users
// Search for all the trips
// Search for all the spots

// pull in any mongoose dependencies

