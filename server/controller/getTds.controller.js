const Tds = require('../model/tds.model')

const getTds = async (req, res) => {
    try {
        const tds = await Tds.find()
        const resTds = 
            tds.map(
                (d) => {
                    return {
                        location: d.location,
                        value: d.value,
                        time: d.createdAt.toLocaleString()
                    }
                }
                
            )
        
        res.status(200).json(resTds)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getByLocation = async (req, res) => {
    const locationName = req.params.locName
    try {
        const tds = await Tds.find({
            location: {$in:[locationName]}
        })
        const resTds = 
            tds.map(
                (d) => {
                    return {
                        location: d.location,
                        value: d.value,
                        time: d.createdAt.toLocaleString()
                    }
                }
                
            )
            res.status(200).json(resTds)
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {getTds, getByLocation}