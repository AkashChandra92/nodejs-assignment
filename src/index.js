const Bus = require("./Model/Bus")
const mongoose = require('mongoose');

const Entity = mongoose.model('testBus', Bus);
const connectionString =
"mongodb://localhost:27017";
mongoose.connect(connectionString, { useNewUrlParser: true }, () =>
  console.log("Connected to DB yoooo!")
);

const NATS = require("nats");
let nc = NATS.connect({ json: true });
// This is where the connection is establised.
nc.on("connect", c => {
  console.log("Connected to NATS!");
});

nc.subscribe("vehicle.test-bus-1", msg => {
  // processMessages is called to send the data to the database
  processMessages(msg)
});

// function which sends all of the data to the database.
function processMessages(msg) {
  if (msg) {
    Entity.create({
      ...msg
    }).then(bus => {
      console.log({ added: bus });
    }).catch(err => console.log({ error: err }))
  } else {

  }
}
