const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  addPet,
  getPets,
  getPetById,
  updatePet,
  deletePet
} = require("../controllers/petController");

// 🟢 CREATE PET (WITH IMAGE UPLOAD)
router.post("/", upload.single("image"), addPet);

// 🟢 GET ALL PETS
router.get("/", getPets);

// 🟢 GET SINGLE PET
router.get("/:id", getPetById);

// 🟢 UPDATE PET
router.put("/:id", updatePet);

// 🟢 DELETE PET
router.delete("/:id", deletePet);

module.exports = router;