const express = require("express");
const router = express.Router();

const { addNewReceipt } = require("../controllers/receipt.controllers");

router.post("/newReceipt", addNewReceipt);

module.exports = router;
