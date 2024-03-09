const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    enum: ["In Stock", "Out of Stock"],
    default: "In Stock",
    required: true,
  },
});

module.exports = mongoose.model("local", productSchema);
