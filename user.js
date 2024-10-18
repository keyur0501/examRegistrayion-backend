const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  conjunction: { type: String, required: true },
  gramaticallyCorrect: { type: String, required: true },
  pluralWorld: { type: String, required: true },
  comparativeForm: { type: String },

  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
