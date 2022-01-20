const express = require('express')
const { getTds, getByLocation } = require('../controller/getTds.controller')
const route = express.Router()

route.get('/',getTds)
route.get('/:locName', getByLocation)

module.exports = route