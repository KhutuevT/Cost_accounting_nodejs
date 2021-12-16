const Receipt = require("../../db/models/receipt/index");

module.exports.addNewReceipt = (req, res, next) => {
  const body = req.body;
  const { text, cost } = body;
  if ((body.hasOwnProperty("text") && text.trim().length) &&
    (body.hasOwnProperty("cost") && +cost)
  ) {
    const receipt = new Receipt(req.body);
    receipt.save()
      .then((result) => {
        return res.send(result);
      })
      .catch((err) => {
        return res.send(err);
      });
  } else return res.status(422).send("Some fields are missing or not valid!(text or cost)");
};

module.exports.getAllReceipts = (req, res, next) => {
  Receipt.find()
    .then((result) => {
      return res.send({ data: result });
    })
    .catch((err) => {
      return res.status(422).send(err);
    });
};

module.exports.deleteReceipt = (req, res, next) => {
  const query = req.query;
  if (query.hasOwnProperty("id") && query.id.trim().length) {
    const id = req.query.id;
    Receipt.deleteOne({ _id: id })
      .then((result) => {
        return res.send(result);
      })
      .catch((err) => {
        return res.status(422).send(err);
      });
  } else return res.status(422).send("No valid ID!");
};

module.exports.updateReceipt = (req, res, next) => {
  const body = req.body;
  const { id, text, cost, date } = body;
  let sendObj = {};
  if (body.hasOwnProperty("id")) {
    if (body.hasOwnProperty("text") && text.trim().length) {
      sendObj.text = text.trim();
    }
    if (body.hasOwnProperty("cost") && +cost) {
      sendObj.cost = +cost;
    }
    if (body.hasOwnProperty("date") && date.trim().length) {
      sendObj.date = date;
    }
    if (Object.keys(sendObj).length !== 0) {
      Receipt.updateOne({ _id: id }, sendObj)
        .then((result) => {
          return res.send(result);
        })
        .catch((err) => {
          return res.send(err);
        });
    } else return res.status(422).send("No valid data!");
  } else return res.status(422).send("No ID!");
};
