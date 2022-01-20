const Location = require('../model/locations.model')

const getLocation = async (req, res) => {
    try {
        const location = await Location.find()
        // console.log("có" + location)
        res.status(200).json(location)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
module.exports = {getLocation}