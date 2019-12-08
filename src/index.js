const Bus = require("./Model/Bus");
const mongoose = require("mongoose");
const Entity = mongoose.model("testBus", Bus);
const createConnection = require("./mongoose");
const processMessages = require("./process");

// To enter the data into the database directly from the stream, the connection has to be made in  the same file.
// Connection to the mongod instance made here wwhich connects to main database
createConnection();

// Connecion to the mongod instance made here which handles incident data
const NATS = require("nats");
let nc = NATS.connect({ json: true });

// This is where the connection is established
nc.on("connect", c => {
  console.log("Connected to NATS!");
});

// Data starts flowing from nats (pub-sub model)
function getMessages() {
  nc.subscribe("vehicle.test-bus-1", msg => {
    // processMessages(msg);
    showMessages(msg);
  });
}

getMessages();
// This function is used to see the data coming from NATS
function showMessages(msg) {
  console.log(msg);
}

// This file will store another function to send data to the incident database
// Then start building Mongod2
// Make the connection in the same file and see if all data goes to the incident database
// Once successfull, apply the function to sort the incident data
// Finally write tests for everything required
