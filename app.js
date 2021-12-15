const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

const uri =
  "mongodb+srv://Tamerlan:restart987@cluster0.3ev4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
