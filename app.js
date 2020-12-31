const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes/routing");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

const port = process.env.PORT || 4000;

mongoose
  .connect("mongodb://localhost:27017/cargoExpress", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
