const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const creatorRoutes = require("./routes/creatorRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const realityRoutes = require("./routes/realityRoutes");
const audienceRoutes = require("./routes/audienceRoutes");
const revivalRoutes = require("./routes/revivalRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", userRoutes);
app.use("/api/creator", creatorRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/reality-check", realityRoutes);
app.use("/api/audience-analysis", audienceRoutes);
app.use("/api/revive-content", revivalRoutes);

// Home Route
app.get("/", (req, res) => {
res.send("Creator Copilot Backend Running");
});

// Database Connection
connectDB();

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});