const Receipt = require("../../db/models/receipt/index");

module.exports.addNewReceipt = (req, res, next) => {
  if (req.body.text.trim().length && +req.body.cost) {
    const receipt = new Receipt(req.body);
    receipt.save().then((result) => {
      res.send(result);
    });
  } else res.status(422).send("Wrong data!");
};
