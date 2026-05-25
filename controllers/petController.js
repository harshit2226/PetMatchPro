const Pet = require("../models/Pet");
const cloudinary = require("../config/cloudinary");

// 🟢 ADD PET (WITH IMAGE UPLOAD SUPPORT)
const addPet = async (req, res) => {
  try {
    let imageUrl = "";

    // If image uploaded via multer
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const pet = await Pet.create({
      petName: req.body.petName,
      breed: req.body.breed,
      age: req.body.age,
      description: req.body.description,
      image: imageUrl,
    });

    res.status(201).json({
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 GET ALL PETS
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 GET SINGLE PET
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 UPDATE PET
const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({
      message: "Pet updated successfully",
      pet,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 DELETE PET
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json({
      message: "Pet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
};