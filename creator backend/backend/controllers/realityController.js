const RealityCheck = require("../models/RealityCheck");

const checkReality = async (req, res) => {
  try {
    const { script } = req.body;

    const result = await RealityCheck.create({
      script,
      issues: ["Potential unsupported claim"],
      suggestions: ["Add supporting evidence"],
    });

    res.status(200).json({
      issues: [
        {
          type: "Unsupported Claim",
          text: script,
        },
      ],
      suggestions: [
        "Provide source for claim.",
      ],
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  checkReality,
};