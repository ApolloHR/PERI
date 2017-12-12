const path = require('path');
const { saveNewUser, saveNewTrip, getTrips } = require('../Db/index.js')
const db = require('../Db/schema.js')

const PORT = process.env.PORT || 3000
const express = require( 'express' )
const app= express()
const server = require( 'http' ).createServer( app )
const passport = require( 'passport' )
const util = require( 'util' )
const bodyParser = require( 'body-parser' )
const cookieParser = require( 'cookie-parser' )
const session = require( 'express-session' )
  // , RedisStore = require( 'connect-redis' )( session )
// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
//CHOOSE*****
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  // configure Express
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.use( express.static(__dirname + '/public'));
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
  extended: true
}));
app.use( passport.initialize());
app.use( passport.session());

app.use(session({secret: 'anystringoftext',
         saveUninitialized: true,
         resave: true}));


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://www.google.ca',
    passReqToCallback   : true
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log('SESSION id line 45 server =', accessToken.sessionID);
      // return done(null, profile);
    });
  }
));


// GET /auth/google
// app.get('/auth/google', passport.authenticate('google', { scope: [
//        'https://www.googleapis.com/auth/plus.login',
//        'https://www.googleapis.com/auth/plus.profile.emails.read']
// }));

// .then((success) => {
//   console.log('success google login ln78 server =', success);
//   res.send(200);
// }).catch((error) => {
//   console.log('error ln80 google login = ', error);
// })

//CALLBACK
// app.get( '/auth/google/callback',
//       passport.authenticate( 'google', {
//         successRedirect: '/',
//         failureRedirect: '/auth/google'
// }));


//NEWWW
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  app.get('/auth/google/callback',
    passport.authenticate('google', { successRedirect: '/',
                                        failureRedirect: '/sgadfad' }));

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
      console.log('error line 106 server =', error);
    }
    res.send(trips);
  });
});



app.use(express.static(path.join(__dirname, '../Client/dst')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))