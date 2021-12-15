const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = 8000;
//const apiRoutes = require("./src/modules/routes/routes");

//middleware
app.use(express.json());
app.use(cors());

//app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});


