const mongoose = require("mongoose");

const revivalSuggestionSchema = new mongoose.Schema(
  {
    title: String,
    views: Number,
    likes: Number,
    comments: Number,
    revivalSuggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RevivalSuggestion",
  revivalSuggestionSchema
);