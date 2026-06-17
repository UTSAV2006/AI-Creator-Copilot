const mongoose = require("mongoose");

const creatorDataSchema = new mongoose.Schema({
  sleepHours: Number,
  workHours: Number,
  stressLevel: Number,
  motivationLevel: Number,
  burnoutScore: Number,
});

module.exports = mongoose.model(
  "CreatorData",
  creatorDataSchema
);