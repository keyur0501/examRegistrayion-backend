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
  res.send("Exam Server Running");
});

app.post("/api/register", async (req, res) => {
  // Check if a user with the same ID already exists
  const existingUser = await User.findOne({ ID: req.body.id });
  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new User({
      NAME: req.body.name,
      ID: req.body.id,
      MCQ01: req.body.question1, // Answer to Question 1
      MCQ02: req.body.question2, // Answer to Question 2
      MCQ03: req.body.question3, // Answer to Question 3
      MCQ04: req.body.question4, // Answer to Question 4
      MCQ05: req.body.question5, // Answer to Question 5
      MCQ06: req.body.question6, // Answer to Question 6
      MCQ07: req.body.question7, // Answer to Question 7
      MCQ08: req.body.question8, // Answer to Question 8
      MCQ09: req.body.question9, // Answer to Question 9
      MCQ10: req.body.question10, // Answer to Question 10
      MCQ11: req.body.question11, // Answer to Question 11
      MCQ12: req.body.question12, // Answer to Question 12
      MCQ13: req.body.question13, // Answer to Question 13
      MCQ14: req.body.question14, // Answer to Question 14
      MCQ15: req.body.question15, // Answer to Question 15
      MCQ16: req.body.question16, // Answer to Question 16
      MCQ17: req.body.question17, // Answer to Question 17
      MCQ18: req.body.question18, // Answer to Question 18
      MCQ19: req.body.question19, // Answer to Question 19
      MCQ20: req.body.question20, // Answer to Question 20
      MCQ21: req.body.question21, // Answer to Question 21
      MCQ22: req.body.question22, // Answer to Question 22
      MCQ23: req.body.question23, // Answer to Question 23
      MCQ24: req.body.question24, // Answer to Question 24
      MCQ25: req.body.question25, // Answer to Question 25
      MCQ26: req.body.question26, // Answer to Question 26
      MCQ27: req.body.question27, // Answer to Question 27
      MCQ28: req.body.question28, // Answer to Question 28
      MCQ29: req.body.question29, // Answer to Question 29
      MCQ30: req.body.question30, // Answer to Question 30
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
