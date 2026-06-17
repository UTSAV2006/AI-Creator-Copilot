const mongoose = require("mongoose");

const realityCheckSchema = new mongoose.Schema(
  {
    script: String,
    issues: [String],
    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RealityCheck",
  realityCheckSchema
);