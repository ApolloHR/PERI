const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../client/dst')))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))