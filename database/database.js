const mongoose = require('mongoose')

dbConnection = mongoose.connect(process.env.MONGO_URI)

module.exports = dbConnection