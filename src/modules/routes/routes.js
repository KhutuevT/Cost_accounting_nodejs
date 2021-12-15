const express = require("express");
const router = express.Router();

const {
  addNewReceipt,
  getAllReceipts,
  deleteReceipt,
  updateReceipt,
} = require("../controllers/receipt.controllers");

router.get("/allReceipts", getAllReceipts);
router.post("/newReceipt", addNewReceipt);
router.delete("/deleteReceipt", deleteReceipt);
router.patch("/updateReceipt", updateReceipt);

module.exports = router;
