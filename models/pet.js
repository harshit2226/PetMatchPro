const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
      trim: true
    },
    breed: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String, // URL of image
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);