const express = require("express");
const connectDB = require("./db/db");
const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

module.exports = app;
