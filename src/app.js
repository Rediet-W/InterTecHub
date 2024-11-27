const express = require("express");
const connectDB = require("./db/db");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

const app = express();
connectDB();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
// Routes
app.use("/books", bookRoutes);

module.exports = app;
