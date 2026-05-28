const express = require("express");

const router = express.Router();

const {
  addFavorite,
  getFavorites,
  removeFavorite,
} = require("../controllers/favoriteController");

router.post("/", addFavorite);

router.get("/", getFavorites);

router.delete("/:id", removeFavorite);

module.exports = router;