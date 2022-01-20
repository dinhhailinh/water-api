const express = require('express')
const { getLocation } = require('../controller/location.controller')


const route = express.Router()

route.get('/',getLocation)

module.exports = route