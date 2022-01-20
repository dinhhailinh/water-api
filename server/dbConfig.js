const mongoose = require('mongoose')

exports.dbConfig = () => mongoose.connect(process.env.MONGO_URL)
.then(console.log('Connect to mongodb success!'))
.catch((e) => console.log('Error: ' + e))