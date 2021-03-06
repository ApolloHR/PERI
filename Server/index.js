const algoliasearch = require('algoliasearch');
const path = require( 'path' );
const { saveNewUser, saveNewTrip, getTrips, getSpots, getAllSpots, getNewestTrip, getOneTrip, getProfile } = require( '../Db/index.js' );
const { saveTripsAlgolia, saveTripAlgolia, updateUpvotesDB } = require('../Db/algoliaSearch.js');
const db = require( '../Db/schema.js' );
const express = require( 'express' );
const PORT = process.env.PORT || 3000;
const app = express();
const server = require( 'http' ).createServer( app );
const passport = require( 'passport' );
const bodyParser = require( 'body-parser' );
const cookieParser = require( 'cookie-parser' );
const session = require( 'express-session' );
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const sgMail = require('@sendgrid/mail');
const morgan = require('morgan');
sgMail.setApiKey('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');
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
  extended: true
}));
app.use( passport.initialize());
app.use( passport.session());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(session({secret: 'hellofuturebenji',
  saveUninitialized: true,
  resave: true}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});

//GOOGLE LOGIN
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.LOCAL_GOOGLE_REDIRECT || 'https://travelperi.herokuapp.com/auth/google/callback',
  passReqToCallback: true
},
function(userInfo, accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    db.User.findOne({'username': profile.emails[0].value}, function(err, user) {
      if (err) {
        console.log('error line 47 server');
        return done(err);
      }
      if (user) {
        console.log('Found user line 49 server');
        db.User.findOneAndUpdate({ 'username': profile.emails[0].value }, {'sessionID': userInfo.sessionID}, (err, doc) => {
          if (err) {
            console.log('error = ', err);
          }
          if (doc) {
            console.log('Updated new sessionID succesfuly');
          }

        });
        return done(null, user);
      } else {
        var newUser = {
          username: profile.emails[0].value,
          sessionID: userInfo.sessionID,
          fullName: profile.displayName
        };
        saveNewUser(newUser);
        return done(null, newUser);
      }
    });
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
    failureRedirect: '/auth/google' }));



// FACEBOOK LOGIN
passport.use(new FacebookStrategy({
  clientID: '198611860701120',
  clientSecret: 'c98e22895cdfe8d807af4ec849dce2d3',
  callbackURL: '/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    console.log('ACCESS TOKEN ======', accessToken);
    db.User.findOne({'username.type': profile.id}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, user);
      } else {
        var newUser = new User();
        newUser.facebook.id = profile.id;
        newUser.facebook.token = accessToken;
        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
        newUser.facebook.email = profile.emails[0].value;

        newUser.save(function(err) {
          if (err) {
            throw err;
          }
          return done(null, newUser);
        });
        console.log(profile);
      }
    });
  });
}));

app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/profile',
    failureRedirect: '/' }));


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//GET req to see if user is logged in or not
app.get('/checkSession', (req, res) => {
  db.User.findOne({ sessionID: req.sessionID }, (err, user) => {
    if (user) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

//GET ALL TRIPS
app.get('/trips', (req, res) => {
  getTrips((err, trips) => {
    if (err) {
      res.send(err);
    }
    res.send(trips);
  });
});

app.get('/getAllSpots', (req, res) => {
  getAllSpots((err, spots) => {
    if (err) {
      res.send(err);
    }
    res.send(spots);
  });
});

app.post('/spots', (req, res) => {
  getSpots(req.body.tripId, (err, spots) => {
    if (err) {
      console.log('error line 128 server =', error);
    }
    res.send(spots);
  });
});

app.post('/api/saveTrip', (req, res) => {
  console.log(req.body);
  saveNewTrip(req.body, (err, status) => {
    if (err) {
      res.send(err);
    } else {
      getNewestTrip((err, trip) => {
        if (err) {
          console.log(err);
        } else {
          saveTripAlgolia(trip);
        }
      });
      res.send(status);
    }
  });
});

app.post('/upvote', (req, res) => {
  updateUpvotesDB(req.body, (err, trip) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({ upvotes: trip });
    }
  });
});

app.post('/getUpvote', (req, res) => {
  db.Trip.findOne({ '_id': req.body }, (err, doc) => {
    if (err) {
      console.log('error = ', err);
    }
    if (doc) {
      console.log('Upvote GET succesful, =', doc.upvotes);
      res.send(200, doc.upvotes);
    }
  });
});

app.post('/invite', function(req, res) {
  const msg = {
    to: req.body.guest,
    from: 'periapp@peri.com',
    subject: `FIXX THIS TO USERNAME has Invited You`,
    text: `Hello Jedi Master. You have been invited to the PERI network by USERNAME.  please visit travelperi.herokuapp.com to get inspired!`
  };
  console.log('REQ BODY line 228 server =', req);
  sgMail.send(msg).then(function() {
    res.send('sent success');
    res.end();
  });
});

app.post('/getOneTrip', (req, res) => {
  console.log('Sever checking getOneTrip Route: ', req.body);
  getOneTrip(req.body.trip, (err, trip) => {
    if (err) {
      res.send(err);
    } else {
      res.send(trip);
    }

  });
});

// SAVES ALL TRIP TO ALGOLIA
saveTripsAlgolia();

//Get all trips for specific user for Profile.jsx
app.post('/getProfile', (req, res) => {
  console.log('Sever checking getProfile Route: ', req.body.data);
  getProfile(req.body.data, (err, profile) => {
    if (err) {
      res.send(err);
    } else {
      res.send(profile);
    }

  });
});

app.use(express.static(path.join(__dirname, '../Client/dst')));

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.post('/isLoggedIn', (req, res) => {
  console.log('server req session passport sessionID', req.session.passport.user);
  let seshID = req.session.passport.user;
  res.send(seshID);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));