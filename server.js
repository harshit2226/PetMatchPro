require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const favoriteRoutes =
require("./routes/favoriteRoutes");

dotenv.config();

// connect DB
connectDB();

const app = express();
console.log("CLOUD NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API KEY:", process.env.CLOUDINARY_API_KEY);
// 🟢 MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 🟢 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use(
  "/api/favorites",
  favoriteRoutes
);

// 🟢 TEST ROUTE
app.get("/", (req, res) => {
  res.send("PetMatchPro API Running 🚀");
});

// 🟢 START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});