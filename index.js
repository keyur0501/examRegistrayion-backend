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
    // Create new user with all the questions and data from the form
    const newUser = new User({
      name: req.body.name,
      id: req.body.id,
      question1: req.body.question1, // Answer to Question 1
      question2: req.body.question2, // Answer to Question 2
      question3: req.body.question3, // Answer to Question 3
      question4: req.body.question4, // Answer to Question 4
      question5: req.body.question5, // Answer to Question 5
      question6: req.body.question6, // Answer to Question 6
      question7: req.body.question7, // Answer to Question 7
      question8: req.body.question8, // Answer to Question 8
      question9: req.body.question9, // Answer to Question 9
      question10: req.body.question10, // Answer to Question 10
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
