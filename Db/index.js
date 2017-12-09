const mongoose = require('mongoose');
const User = mongoose.Schema;
const Trips = mongoose.Schema;
const Spot = mongoose.Schema;

const userSchema = new User({
  name: String,
  sessionID: String,
})

const tripsSchema = new Trips({

})

