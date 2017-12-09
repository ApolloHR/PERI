const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, '../client/dst')))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('now listening on port 3000!'))