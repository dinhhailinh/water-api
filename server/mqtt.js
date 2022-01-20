const mqtt = require('mqtt')
const dotenv = require('dotenv')
const Tds = require('./model/tds.model')
dotenv.config()
const Location = require('./model/locations.model')
const options = {
    port: process.env.PORT_MQTT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}
//initialize the MQTT client
const client = mqtt.connect(process.env.MQTT_URL,options);

client.on("message",async function(topic, message){
    if(topic == "Sensordata"){
        let data = message.toString().split(",");// data
        try {
            await Tds.create({
                location: data[0],
                value: data[1]
            })
            const check = await Location.find({
                location: {$in: [data[0]]}
            })
            if(!check){
                await Location.create({
                    location: data[0],
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
})
module.exports = client