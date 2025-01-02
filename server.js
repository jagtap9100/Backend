const express = require("express");
const dotenv = require("dotenv").config();
const adminRoutes = require("./Routes/adminRoutes");
const ownerRez = require("./Routes/ownerRez");
const loginRoutes = require("./Routes/loginRoutes");
const otherRoutes = require("./Routes/otherRoutes");
const app = express();
const PORT = process.env.PORT || 3008;
const ejs = require("ejs");

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/", otherRoutes);
app.use("/api/v1/channels", ownerRez);
app.use("/admin", adminRoutes);
app.use("/login", loginRoutes);

// Default route

// Error handling middleware (should come after all routes)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong!" });
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
