const express = require("express");
const router = express.Router();

const {
  analyzeBurnout,
  getHistory,
} = require("../controllers/creatorController");

router.post("/analyze", analyzeBurnout);
router.get("/history", getHistory);

module.exports = router;