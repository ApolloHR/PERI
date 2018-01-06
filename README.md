# GETTING STARTED #
1. fork and clone the repo
2. npm install
3. npm run startDev
4. npm run compile

# CLOUD DATABASE SETUP #
1. setup an account at mlab.com
2. in your dashboard, click creat new under MongoDB Deployments
3. select amazon as your cloud provider and select sandbox as your plan type
4. select US as your AWS region
5. name your database, and submit your order
6. in your dashboard, selet your newly created database
7. click on users and add a user
8. create a .env file in your root directory
9. inside your .env file add:
    DB_USER=[username]
    DB_PASS=[password]

# Google Maps Javascript API
1. Go to the provided link and create your api key https://developers.google.com/maps/documentation/javascript/
2. Inside spotMap.jsx component replace the api key with your api key (without the brackets):
  'https://maps.googleapis.com/maps/api/js?key=[YOUR API KEY GOES HERE]&libraries=geometry,drawing,places'
3. Go to https://console.developers.google.com/ and make your api restricted to only certain links, this way you can push up your api key and not worry about someone stealing it and using it.

# ALGOLIA Search Setup #
1. Sign up www.algolia.com
2. Go to API keys you have three (Application ID, Search Only & Admin Api Key)
3. Go to search.jsx in your components and replace the instant search appId and apiKey with your Application ID and Search Only api key
4. Inside your .env file add
  ALGOLIA_API=[Admin Api Key from algolia]
5. Go to algoliaSearch.js in Db directory and change line 7's Application ID with your owns

# Cloudinary Setup #
1. Sign up at www.cloudinary.com
2. Create upload preset
3. Get cloud name
4. Inside .env file add preset and cloud name

# OAuth 1.0 client ID#
1. Login into Google's API section
2. Get API Key info for google auth
3. Put them in the .env file under GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
4. In the .env file also include: LOCAL_GOOGLE_REDIRECT=http://localhost:3000/auth/google/callback

# SETTING UP TRAVIS CI #
NICK CAN FILL THIS OUT


# HELPFUL RESOURCES #
AXIOS </br>
https://github.com/axios/axios</br>
EXPRESS</br>
https://expressjs.com/</br>
GOOGLE MAPS API REFERS</br>
https://developers.google.com/maps/documentation/javascript/</br>
BULMA</br>
https://bulma.io/</br>
MONGOOSE</br>
http://mongoosejs.com/docs/index.html</br>
PASSPORT</br>
http://www.passportjs.org/docs</br>
REACT</br>
https://reactjs.org/docs/components-and-props.html</br>
REDUX</br>
https://redux.js.org/</br>
WEBPACK</br>
https://webpack.js.org/</br>
GOOGLE MAPS REACT TOM CHENT</br>
https://github.com/tomchentw/react-google-maps</br>
ALGOLIA REACT CODE DEMOS</br>
https://community.algolia.com/react-instantsearch/examples/Demos.html</br>
