const AudienceAnalysis = require("../models/AudienceAnalysis");

const analyzeAudience = async (req, res) => {
  try {
    const { comments } = req.body;

    const confusionScore = 72;

    const suggestions = [
      "Clarify introduction",
      "Add examples",
    ];

    await AudienceAnalysis.create({
      comments,
      confusionScore,
      suggestions,
    });

    res.status(200).json({
      confusionScore,
      suggestions,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  analyzeAudience,
};