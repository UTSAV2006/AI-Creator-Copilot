const express = require("express");
const router = express.Router();

const {
  checkReality,
} = require("../controllers/realityController");

router.post("/", checkReality);

module.exports = router;