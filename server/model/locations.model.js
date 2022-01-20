const mongoose = require('mongoose')

const LocationsSchema = new mongoose.Schema({
    locationName:{
        type: String,
        require: true
    }
},
{timestamps: true},

)

module.exports = mongoose.model('Locations', LocationsSchema)