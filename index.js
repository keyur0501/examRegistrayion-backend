const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config(); // Load environment variables

const User = require("./user");
const Student = require("./student");
const Examee = require("./examee");
const Person = require("./person");
const Customer = require("./customer");
const Buyer = require("./buyer");
const Participant = require("./participant");
const Pune = require("./pune");
const Vijayawada = require("./vijayawada");
const Trivandrum = require("./trivandrum");
const Patna = require("./patna");

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

app.post("/api/register/Bhubaneswar", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

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

app.post("/api/register/Bangalore", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Student({
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

app.post("/api/register/Hyderabad", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Examee({
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

app.post("/api/register/Chandigarh", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Person({
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

app.post("/api/register/Delhi", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Customer({
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

app.post("/api/register/Guwahati", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Buyer({
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

app.post("/api/register/Chennai", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Participant.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Participant({
      NAME: req.body.name,
      ID: id,
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

app.post("/api/register/Pune", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Pune.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Pune({
      NAME: req.body.name,
      ID: id,
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

app.post("/api/register/Vijayawada", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Vijayawada.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Vijayawada({
      NAME: req.body.name,
      ID: id,
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

app.post("/api/register/Trivandrum", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Trivandrum.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Trivandrum({
      NAME: req.body.name,
      ID: id,
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

app.post("/api/register/Patna", async (req, res) => {
  // Check if a user with the same ID already exists
  const id = req.body.id.trim(); // Trim any leading or trailing whitespace
  const existingUser = await Patna.findOne({ ID: id });

  if (existingUser) {
    return res.status(400).json({ error: "User ID already exists" });
  }

  try {
    // Create new user with all the questions and data from the form
    const newUser = new Patna({
      NAME: req.body.name,
      ID: id,
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
app.get("/api/users/Bhubaneswar", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Bangalore", async (req, res) => {
  try {
    const users = await Student.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Hyderabad", async (req, res) => {
  try {
    const users = await Examee.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Chandigarh", async (req, res) => {
  try {
    const users = await Person.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Delhi", async (req, res) => {
  try {
    const users = await Customer.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Guwahati", async (req, res) => {
  try {
    const users = await Buyer.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Chennai", async (req, res) => {
  try {
    const users = await Participant.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Pune", async (req, res) => {
  try {
    const users = await Pune.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Vijayawada", async (req, res) => {
  try {
    const users = await Vijayawada.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Trivandrum", async (req, res) => {
  try {
    const users = await Trivandrum.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.get("/api/users/Patna", async (req, res) => {
  try {
    const users = await Patna.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
