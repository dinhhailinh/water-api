const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { dbConfig } = require('./dbConfig')
const client = require('./mqtt')
const getTds = require('./Router/quality.route')
const getLocation = require('./Router/location.route')
const PORT = process.env.PORT || 5000
dotenv.config()

dbConfig()
app.use(express.json())
app.use(cors())

//setup the callbacks
client.on('connect', function () {
    console.log('Connected'); 
    client.subscribe("Sensordata")
});
client.on('error', function (error) {
    console.log(error);
});

app.use('/api/tds', getTds)
app.use('/api/locations', getLocation)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})