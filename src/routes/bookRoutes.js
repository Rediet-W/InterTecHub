const express = require("express");
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  markAsFavorite,
} = require("../controllers/bookController");
const validate = require("../middleware/validate");
const bookSchema = require("../models/bookSchema"); // Joi validation schema

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", validate(bookSchema), addBook);
router.put("/:id", validate(bookSchema), updateBook);
router.delete("/:id", deleteBook);
router.patch("/:id/favorite", markAsFavorite);

module.exports = router;
