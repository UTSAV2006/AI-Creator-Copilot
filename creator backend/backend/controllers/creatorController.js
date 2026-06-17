const CreatorData = require("../models/CreatorData");
const calculateBurnout = require("../services/burnoutService");

// Analyze Burnout
const analyzeBurnout = async (req, res) => {
  try {
    const result = calculateBurnout(req.body);

    const entry = await CreatorData.create({
      ...req.body,
      burnoutScore: result.score,
    });

    res.status(200).json({
      burnoutScore: result.score,
      risk: result.risk,
      data: entry,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get History
const getHistory = async (req, res) => {
  try {
    const history = await CreatorData.find().sort({
      createdAt: -1,
    });

    res.status(200).json(history);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  analyzeBurnout,
  getHistory,
}