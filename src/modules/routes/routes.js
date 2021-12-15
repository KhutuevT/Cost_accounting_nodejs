const express = require("express");
const router = express.Router();

const {
  addNewReceipt,
  getAllReceipts,
  deleteReceipt,
} = require("../controllers/receipt.controllers");

router.get("/allReceipts", getAllReceipts);
router.post("/newReceipt", addNewReceipt);
router.delete("/deleteReceipt", deleteReceipt);

module.exports = router;
