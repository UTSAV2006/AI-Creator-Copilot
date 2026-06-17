const express = require("express");
const router = express.Router();

const {
  reviveContent,
} = require("../controllers/revivalController");

router.post("/", reviveContent);

module.exports = router;