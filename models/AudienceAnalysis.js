const mongoose = require("mongoose");

const audienceAnalysisSchema = new mongoose.Schema(
  {
    comments: [String],
    confusionScore: Number,
    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "AudienceAnalysis",
  audienceAnalysisSchema
);