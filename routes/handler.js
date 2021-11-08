const express = require("express");
const router = express.Router();
const {
  viewTransactions,
  addTransactions,
  delTransactions,
} = require("../workers/transactionWorker");

//base route /api/transaction

//use router.route to navigate to the worker apis
router.route("/").get(viewTransactions).post(addTransactions); //view and add transactions
router.route("/:id").delete(delTransactions); //delete with transaction id

// router.get("/", (req, res) => {
//   res.send("Router works!");
// });

module.exports = router;
