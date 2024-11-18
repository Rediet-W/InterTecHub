const express = require("express");

const app = express();

// Route: /
app.get("/", (req, res) => {
  res.status(200).send("please visit /name, /hobby, /dream");
});

// Route: /name
app.get("/name", (req, res) => {
  res.status(200).send("Rediet Woudma");
});

// Route: /hobby
app.get("/hobby", (req, res) => {
  res.status(200).json({ hobby: "Reading books and community serving" });
});

// Route: /dream
app.get("/dream", (req, res) => {
  res
    .status(200)
    .send("My dream is to make a global impact through technology.");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
