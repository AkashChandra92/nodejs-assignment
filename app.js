const express = require("express");
const Bus = require('./src/Model/Bus')
const connectionString =
"mongodb://localhost:27017";

const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

port = 3000;

app.listen(port);

app.use(bodyParser.json());
app.use(cors());

// Import Routes
const Routes = require("./src/Model/routes");

app.use(Routes);

// Routes
app.get("/"
, (req, res) => {
  console.log("hello")
  res.json(`Running on ${port}`);
});

// Connect to Db
mongoose.connect(connectionString, { useNewUrlParser: true }, () =>
  console.log("Connected to DB yoooo!")
);

// const Entity = mongoose.model('Hjk', Bus);
// hjk is the name of the document 

// Entity.create({ time : 11/02/2019, energy : 42, gps: 35, odo: 23, speed: 27, soc : 45}).then(console.log)

module.exports = connectionString;
