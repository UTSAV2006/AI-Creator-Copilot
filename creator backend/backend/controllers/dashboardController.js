const CreatorData = require("../models/CreatorData");

const getDashboard = async (req, res) => {
  try {
    const history = await CreatorData.find();

    const totalEntries = history.length;

    const burnoutRisk =
      totalEntries > 0
        ? Math.round(
            history.reduce(
              (sum, item) => sum + item.burnoutScore,
              0
            ) / totalEntries
          )
        : 0;

    res.status(200).json({
      burnoutRisk,
      repurposedContent: 0,
      revivalOpportunities: 0,
      realityAlerts: 0,
      confusionScore: 0,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};