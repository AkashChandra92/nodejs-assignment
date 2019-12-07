// To enter the data into the database directly from the stream, the connection has to be made in  the same file.

// const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;
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

nc.on("connect", c => {
  console.log("Connected to NATS!");
});

nc.subscribe("vehicle.test-bus-1", msg => {
  processMessages(msg)
});

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
