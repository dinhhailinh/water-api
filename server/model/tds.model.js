const mongoose = require('mongoose')

const TdsSchema = new mongoose.Schema({
    location:{
        type: String,
        require: true
    },
    value:{
        type: Number,
        require: true
    }
},
{timestamps: true},
)

module.exports = mongoose.model('Tds', TdsSchema)