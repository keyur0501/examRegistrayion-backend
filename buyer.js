const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  NAME: { type: String, required: true },
  ID: { type: String, required: true, unique: true },
  MCQ01: { type: String },
  MCQ02: { type: String },
  MCQ03: { type: String },
  MCQ04: { type: String },
  MCQ05: { type: String },
  MCQ06: { type: String },
  MCQ07: { type: String },
  MCQ08: { type: String },
  MCQ09: { type: String },
  MCQ10: { type: String },
  MCQ11: { type: String },
  MCQ12: { type: String },
  MCQ13: { type: String },
  MCQ14: { type: String },
  MCQ15: { type: String },
  MCQ16: { type: String },
  MCQ17: { type: String },
  MCQ18: { type: String },
  MCQ19: { type: String },
  MCQ20: { type: String },
  MCQ21: { type: String },
  MCQ22: { type: String },
  MCQ23: { type: String },
  MCQ24: { type: String },
  MCQ25: { type: String },
  MCQ26: { type: String },
  MCQ27: { type: String },
  MCQ28: { type: String },
  MCQ29: { type: String },
  MCQ30: { type: String },

  timestamp: { type: Date, default: Date.now }, // Timestamp for record creation
});

const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = Buyer;
