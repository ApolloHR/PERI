const path = require('path');
const { saveNewUser, saveNewTrip, getTrips, getSpots } = require('../Db/index.js')
const db = require('../Db/schema.js')
const PORT = process.env.PORT || 3000
const express = require( 'express' )
const app= express()
const server = require( 'http' ).createServer( app )
const passport = require( 'passport' )
const bodyParser = require( 'body-parser' )
const cookieParser = require( 'cookie-parser' )
const session = require( 'express-session' )
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
  extended: true
}));
app.use( passport.initialize());
app.use( passport.session());
app.use(session({secret: 'hellofuturebenji',
  saveUninitialized: true,
  resave: true}));


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://www.google.ca',
    passReqToCallback : true
  },
  function(userInfo, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log('SESSION id line 33 server =', userInfo.sessionID);
      db.User.findOne({'username.type': profile.displayName}, function(err, user){
        if(err) {
          console.log('error line 46 server')
          return done(err);
        }
        if(user) {
          console.log('error line 40 server')
          return done(null, user);
        } else {
          var newUser = {
            username: profile.emails[0].value,
            sessionID: userInfo.sessionID
          }
          saveNewUser(newUser);
        }
      })
      return done(null, null, null);
      // SessionID IS userInfo.sessionID
      //Full name IS profile.displayName
      //Email IS profile.emails[0].value
    });
  }
));

//NEWWW
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/' })); //****FAILURE GETTING HIT

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



// app.get('/', function(req, res){
//   console.log('line 92 server', req.sessionID);
//   res.send()
// });




function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

// const data = [{
//   username: 'huynh.r.k@gmail.com',
//   tripName: 'vacation in bali',
//   destination: 'Bali',
//   description: 'vacay after the bootcamp!',
//   thumbnail: 'https://goo.gl/HCgNo1',
//   spots: [
//     {
//       spotName: 'beach1',
//       description: 'description for this spot hello world',
//       long: 8.3405,
//       lat: 115.0920,
//       elevation: 32,
//       photo: 'https://goo.gl/fdc8y3',
//     },
//     {
//       spotName: 'beach2',
//       description: 'description for this spot hello world',
//       long: 8.3403,
//       lat: 115.0921,
//       elevation: 52,
//       photo: 'https://goo.gl/WXtpYx',
//     }
//   ]
// }]

// saveNewTrip(data[0])


//GET ALL TRIPS
app.get('/trips', (req, res) => {
  getTrips((err, trips) => {
    if (err) {
      console.log('error line 119 server =', error);
    }
    res.send(trips);
  });
});

app.post('/spots', (req, res) => {
  // console.log('REQ TRIP ID', req.body)
  getSpots(req.body.tripId, (err, spots) => {
    if (err) {
      console.log('error line 128 server =', error);
    }
    // console.log('SPOTS server l131 =', spots)
    res.send(spots);
  });
});



app.use(express.static(path.join(__dirname, '../Client/dst')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))