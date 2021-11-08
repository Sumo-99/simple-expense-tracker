const Expense = require("../models/Expense");

// To view all transactions
// GET /api/transaction
exports.viewTransactions = async (req, res, next) => {
  try {
    let result = await Expense.find();
    return res.status(200).json({
      success: true,
      data: result,
      size: result.length,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error...",
    });
  }

  //   Expense.find()
  //     .then((res) => {
  //       console.log(res);
  //       //   res.status(200).json({
  //       //     success: true,
  //       //     data: res.data,
  //       //     size: res.data.length,
  //       //   });
  //     })
  //     .catch((err) => {
  //       console.log(`OOPS: ${err}`.red.bold);
  //       //   res.status(500).json({
  //       //     success: false,
  //       //     error: "Server Error...",
  //       //   });
  //     });
};

// To add a transaction
// POST /api/transaction
exports.addTransactions = (req, res, next) => {
  Expense.create(req.body)
    .then(() => {
      console.log(`Successfully added ${req.body}`.gray.italic.bold);
      res.status(201).json({
        success: true,
        data: req.body,
      });
    })
    .catch((err) => {
      if (err.name === "Validation Error") {
        const errors = Object.values(err.erros).map((e) => e.message);
        res.status(400).json({
          success: false,
          error: errors,
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Server Error...",
        });
      }
      console.log(`error: ${err}`.red.bold);
    });
};

// To delete a transaction (using transaction id)
// DELETE /api/transaction/:id
exports.delTransactions = async (req, res, next) => {
  try {
    let record = await Expense.findById(req.params.id);
    if (!record) {
      res.status(400).json({
        success: false,
        error: "No field found",
      });
    }
    await record.remove();
    res.status(200).json({
      success: true,
      error: "None",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error...",
    });
  }
};
