const path = require('path');
const { saveNewUser, saveNewTrip, getTrips } = require('../Db/index.js')

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
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
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

// API Access link for creating client ID and secret:
// https://code.google.com/apis/console/
// var GOOGLE_CLIENT_ID      = "478350015763-8r9opoksab7rkbu9jj807bqbshr97ktr.apps.googleusercontent.com"
//   , GOOGLE_CLIENT_SECRET  = "CPb1_eBMl7zI-R8mcvFOcknM";


passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://www.goooogle.ca',
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));



// app.get('/', function(req, res){
//   res.render('index', { user: req.user });
// });

// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google', passport.authenticate('google', { scope: [
       'https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.profile.emails.read']
}, console.log('Login clicked! line 77 server')));

// .then((success) => {
//   console.log('success google login ln78 server =', success);
//   res.send(200);
// }).catch((error) => {
//   console.log('error ln80 google login = ', error);
// })

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get( '/auth/google/callback',
      passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/login'
}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

// const data = {
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
// }

// saveNewTrip(data)

app.use(express.static(path.join(__dirname, '../Client/dst')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))