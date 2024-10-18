const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },

  // New questions based on spelling quiz
  question1: { type: String}, // Spell the word: An unexpected or astonishing event
  question2: { type: String}, // Spell the word: An animal that lives in the ocean and has eight arms
  question3: { type: String}, // Which word is spelled correctly?
  question4: { type: String}, // Which of the following is the correct spelling?
  question5: { type: String}, // Choose the correct spelling for the opposite of "hot."
  question6: { type: String}, // Which option is the correct spelling of a vehicle with two wheels?
  question7: { type: String}, // Which word is spelled correctly for "something you play music on"?
  question8: { type: String}, // Add the missing letter in the word ACOMPLISHMENT
  question9: { type: String}, // Remove the extra letter in the word APPETITTE
  question10: { type: String}, // Find the misspelt word in the sentence

  timestamp: { type: Date, default: Date.now }, // Timestamp for record creation
});

const User = mongoose.model("User", userSchema);

module.exports = User;
