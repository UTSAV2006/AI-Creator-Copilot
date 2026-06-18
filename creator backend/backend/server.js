const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const creatorRoutes = require("./routes/burnoutRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const realityRoutes = require("./routes/realityRoutes");
const audienceRoutes = require("./routes/audienceRoutes");
const revivalRoutes = require("./routes/repurposeRoutes");

const app = express();
exports.app = app;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/reality-check", realityRoutes);
app.use("/api/audience-analysis", audienceRoutes);
app.use("/api/burnout", creatorRoutes);
app.use("/api/repurpose", revivalRoutes);
// Home Route
app.get("/", (req, res) => {
res.send("Creator Copilot Backend Running");
});

// Database Connection
connectDB();

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});