// This file connects to the database and sends all the incoming data to the database after subscribing to Nats.
const nc = require('./natsConnection')
const createConnection = require("./mongoose");
const processMessages = require("./process");

// To enter the data into the database directly from the stream, the connection has to be made in  the same file.

// Connection to the mongod instance made here which connects to the main database
createConnection();

// Data starts flowing from nats (pub-sub model) and is send to the database for persistence
nc.subscribe("vehicle.test-bus-1", msg => {
  // processMessages is the function which sends the data to the database
  processMessages(msg);
  // console.log(msg)
})

// Connection to the mongod instance made here which handles incident data


