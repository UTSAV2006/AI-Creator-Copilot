const express = require("express");
const router = express.Router();

const {
  analyzeAudience,
} = require("../controllers/audienceController");

router.post("/", analyzeAudience);

module.exports = router;