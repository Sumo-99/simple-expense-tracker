const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  text: {
    required: [true, "Please add expense description"],
    type: String,
    trim: true,
  },
  amount: {
    required: [true, "Please add expense amount"],
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
