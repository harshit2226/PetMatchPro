const Favorite = require("../models/Favorite");

// ADD FAVORITE
const addFavorite = async (req, res) => {

  try {

    const { userId, petId } = req.body;

    const alreadyExists =
      await Favorite.findOne({
        userId,
        petId,
      });

    if (alreadyExists) {

      return res.status(400).json({
        message: "Already Favorited",
      });

    }

    const favorite =
      await Favorite.create({
        userId,
        petId,
      });

    res.status(201).json({
      message: "Added to Favorites",
      favorite,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

// GET FAVORITES
const getFavorites = async (req, res) => {

  try {

    const favorites =
      await Favorite.find()
        .populate("petId");

    res.status(200).json(favorites);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

// REMOVE FAVORITE
const removeFavorite = async (req, res) => {

  try {

    await Favorite.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Favorite Removed",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
};