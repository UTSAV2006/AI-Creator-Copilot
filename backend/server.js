require("dotenv").config();

const express = require("express");
const app = express();

const aiRoutes = require("./backend/routes/aiRoutes");

app.use(express.json());

app.use("/api/ai", aiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});