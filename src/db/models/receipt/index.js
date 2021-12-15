const mongoose = require("mongoose");

const { Schema } = mongoose;
const receiptSchema = new Schema({
  text: String,
  date: { type: Date, default: Date.now },
  cost: Number,
});

module.exports = Receipt = mongoose.model("receipts", receiptSchema);

