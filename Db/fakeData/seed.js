const mongoose = require('mongoose');
const { saveNewUser, saveNewTrip} = require('../index.js');
const { User, Trip, Spot } = require('../schema.js');
const trips = require('./data.json');
const users = require('./users.json');
const async = require ('async');

User.remove({}, (err) => {
  if (err) {
    console.log('Error dropping user db');
  } else {
    console.log('User schema dropped!');
    Trip.remove({}, (err) => {
      if (err) {
        console.log('Error dropping trip db');
      } else {
        console.log('Trip schema dropped!');
        Spot.remove({}, (err) => {
          if (err) {
            console.log("Error dropping spots schema");
          } else {
            console.log("Spot schema dropped!");
            users.map((user) => {
              saveNewUser(user, () => console.log('Saved new user!'));
            });
            trips.map((trip) => {
              saveNewTrip(trip, () => console.log('saved new trip!'));
            });
          }
        });
      }
    });
  }
});

