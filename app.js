const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Routes to use in the app
const Routes = require("./src/Model/routes");

// Connect to the port
port = 3000;

// Make the app listen
app.listen(port);

// let the app use certain libraries
app.use(bodyParser.json());
app.use(cors());

app.use(Routes);

// Routes
app.get("/"
, (req, res) => {
  console.log("hello")
  res.json(`Running on ${port}`);
});

console.log("Express server is running")

// const Entity = mongoose.model('Hjk', Bus);
// hjk is the name of the document 

// Entity.create({ time : 11/02/2019, energy : 42, gps: 35, odo: 23, speed: 27, soc : 45}).then(console.log)

// module.exports = connectionString;
