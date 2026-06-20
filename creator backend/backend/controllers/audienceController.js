const AudienceAnalysis = require("../models/AudienceAnalysis");
const analyzeAudienceAI = require("../services_smr/audienceAnalyzerService");

const analyzeAudience = async (req, res) => {
  try {
    const { comments } = req.body;

    const aiResult = await analyzeAudienceAI(comments);

    const confusionScore = aiResult.confusionScore || 0;

    const suggestions = aiResult.suggestions || [];

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