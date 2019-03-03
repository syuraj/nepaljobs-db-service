const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Applicant = mongoose.model('Applicant', new Schema({
	id: String,
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone_no: String,
	current_address: { type: mongoose.Schema.Types.ObjectId, ref: 'address' },
	future_employment: { type: mongoose.Schema.Types.ObjectId, ref: 'future_employment' },
	employment_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employment_history' }],
	education: [{ type: mongoose.Schema.Types.ObjectId, ref: 'education' }],
	skills: [String],
	awards_or_certificates: [String],
	hostIp: String,
	createdDate: { type: Date, default: Date.now },
	modifiedDate: { type: Date, default: Date.now }
}))

const address = mongoose.model('address', new Schema({
	id: String,
	city: { type: mongoose.Schema.Types.ObjectId, ref: 'city' }
}))

const city = mongoose.model('city', new Schema({
	id: String,
	city: { type: String, required: true }
}))

const future_employment = mongoose.model('future_employment', new Schema({
	id: String,
	cities_looking_to_work_for: [String],
	salary_range: [String]
}))

const employment_history = mongoose.model('employment_history', new Schema({
	id: String,
	isCurrent: [String],
	career_level: [String],
	title: [String],
	start_date: Date,
	end_date: Date,
	responsibility: [String]
}))

const education = mongoose.model('education', new Schema({
	id: String,
	highest_education_level: [String],
	school_name: [String],
	year_graduated: [String]
}))

module.exports = {
	Applicant
}
