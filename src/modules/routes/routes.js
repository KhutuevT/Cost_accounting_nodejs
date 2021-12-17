const express = require("express");
const router = express.Router();

const {
  addNewReceipt,
  getAllReceipts,
  deleteReceipt,
  updateReceipt,
  allUserSpending,
} = require("../controllers/receipt.controllers");

router.get("/allReceipts", getAllReceipts);
router.get("/allUserSpending", allUserSpending);
router.post("/newReceipt", addNewReceipt);
router.delete("/deleteReceipt", deleteReceipt);
router.patch("/updateReceipt", updateReceipt);

module.exports = router;
