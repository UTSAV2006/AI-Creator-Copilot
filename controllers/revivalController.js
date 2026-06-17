const RevivalSuggestion = require("../models/RevivalSuggestion");

const reviveContent = async (req, res) => {
  try {
    const { title, views, likes, comments } = req.body;

    const revivalSuggestions = [
      "Turn into Reel",
      "Create Carousel",
      "Create LinkedIn Post",
    ];

    await RevivalSuggestion.create({
      title,
      views,
      likes,
      comments,
      revivalSuggestions,
    });

    res.status(200).json({
      revivalSuggestions,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  reviveContent,
};