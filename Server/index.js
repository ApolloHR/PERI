const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000

const session = require('express-session');
const db = require('../Db/index.js')



app.post('/signup', (req, res) => {

})

app.post('/login', (req, res) => {

})

app.get('/getTrips', (req, res) => {

})

app.post('/trip', (req, res) => {

})





app.use(express.static(path.join(__dirname, '../Client/dst')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))