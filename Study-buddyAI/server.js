// server.js
console.log("🚀 Starting server...");

const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Study Buddy Backend Running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
