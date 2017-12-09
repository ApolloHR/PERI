const express = require('express')
const path = require('path');
const app = express();
const { saveNewUser } = require('../Db/index.js')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../Client/dst')))

saveNewUser();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))