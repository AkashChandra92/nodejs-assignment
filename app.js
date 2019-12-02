const express = require("express");
const connectionString =
"mongodb://localhost:27017/mongo-test";
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

// Middleware
app.use("/posts", () => {
  console.log("This is a middleware running");
});

// Routes
app.get("/", (req, res) => {
  res.send(`We are listening on port ${port}`);
});

// Connect to Db
mongoose.connect(connectionString, { useNewUrlParser: true }, () =>
  console.log("Connected to DB yoooo!")
);

module.exports = connectionString;
