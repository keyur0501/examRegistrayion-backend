const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config(); // Load environment variables

const User = require("./user");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Enable CORS
app.use(cors());
app.use(express.json());

// Route to handle storing user data along with image upload
app.get("/", (req, res) => {
  res.send("Vivo Server Running");
});

app.post("/api/register", async (req, res) => {
  try {
    // Create new user
    const newUser = new User({
      name: req.body.name,
      id: req.body.id,
      conjunction: req.body.conjunction,
      gramaticallyCorrect: req.body.gramaticallyCorrect,
      pluralWorld: req.body.pluralWorld,
      comparativeForm: req.body.comparativeForm,
    });

    // Save user to MongoDB
    await newUser.save();

    res.status(201).json({ message: "Data stored successfully" });
  } catch (error) {
    console.error("Error storing user data:", error);
    res.status(500).json({ error: "Error storing user data" });
  }
});

// Route to fetch all user data
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
