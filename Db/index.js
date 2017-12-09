const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/peri' ||
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`);

const User = mongoose.Schema;
const Trips = mongoose.Schema;
const Spot = mongoose.Schema;
const Forked = mongoose.Schema;

const userSchema = new User({
  username: {
    type: String,
    unique: true
  },
  sessionID: String,
})

const tripsSchema = new Trips({
  username: String,
  tripName: String,
  destination: String,
  description: String,
  spots: [{spotID: Number}] //save the spots ID in here
})

const spotSchema = new Spot({
  tripID: String,
  spotName: String,
  destination: String,
  description: String,
  long: Number,
  lat: Number,
  elevation: Number,
  photo: String
})

const forkedSchema = new Forked({
  userID: String,
  destination: String,
  spots: [{spotID: Number}]
})



