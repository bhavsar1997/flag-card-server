const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  countryname: { type: String, required: true },
  countrycode: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const CountryDetails = mongoose.model('Country', countrySchema);

module.exports = CountryDetails;