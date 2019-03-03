require('dotenv').config()
const mongoose = require('mongoose')
const mongooseSchema = require('./src/database/mongooseSchema')

mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

module.exports = {
	mongooseSchema
}
