const mongoose = require('mongoose');
const { Schema } = mongoose;

const HouseSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  homeType: String,
  description: String,
  price: { type: Number, required: true },
  image: String,
  yearBuilt: Number,
});

module.exports = mongoose.model('House', HouseSchema);
