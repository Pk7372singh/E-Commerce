const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Encode the password using encodeURIComponent
const password = encodeURIComponent("Xyz12345@");

mongoose.connect(
  `mongodb+srv://pk7372singh:Xyz12345@@cluster0.i7svgla.mongodb.net/e-commerce`
);
//mongodb+srv://pk7372singh:<password>@cluster0.i7svgla.mongodb.net/
// API CREATION
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Image storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images", // Corrected folder name to "images"
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Correcting the endpoint for serving static images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    Image_url: `http://localhost:4000/images/${req.file.filename}`, // Corrected string interpolation
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
