const Receipt = require("../../db/models/receipt/index");

module.exports.addNewReceipt = (req, res, next) => {
  const { text, cost } = req.body;
  if (text.trim().length && +cost) {
    const receipt = new Receipt(req.body);
    receipt
      .save()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else res.status(422).send("Wrong data!");
};

module.exports.getAllReceipts = (req, res, next) => {
  Receipt.find()
    .then((result) => res.send({ data: result }))
    .catch((err) => res.status(422).send(err));
};

module.exports.deleteReceipt = (req, res, next) => {
  if (req.query.id.trim().length) {
    const id = req.query.id;
    Receipt.deleteOne({ _id: id })
      .then((result) => res.send(result))
      .catch((err) => res.status(422).send(err));
  }
};
