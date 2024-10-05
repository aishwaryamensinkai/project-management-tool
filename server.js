const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import connectDB
const projectRoutes = require("./routes/projectRoutes"); // Import routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Define API routes
app.use("/api/projects", projectRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
});
