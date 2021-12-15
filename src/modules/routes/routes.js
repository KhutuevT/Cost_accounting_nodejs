const express = require("express");
const router = express.Router();

const {
  addNewReceipt,
  getAllReceipts,
} = require("../controllers/receipt.controllers");

router.get("/allReceipts", getAllReceipts);
router.post("/newReceipt", addNewReceipt);

module.exports = router;
