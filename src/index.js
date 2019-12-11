// This file connects to the database and sends all the incoming data to the database after subscribing to Nats.
const nc = require("./natsConnection");
const Mongoose = require("./mongoose");
const Process = require("./process");
const processIncidentMessages = require("./process");

// To enter the data into the database directly from the stream, the connection has to be made in  the same file.

// Connection to the mongod instance made here which connects to the main database
Mongoose.createdbConnection();

// Connection to the incident database made here
// Mongoose.createIncidentConnection();

// Data starts flowing from nats (pub-sub model) and is send to the database for persistence
nc.subscribe("vehicle.test-bus-1", msg => {
  // processMessages is the function which sends the data to the database
  Process.processMessages(msg);
  // processIncidentMessages is the function which sends the data to the incident collection in the database.
  Process.processIncidentMessages(msg);
  // console.log(msg);
});

// Connection to the mongod instance made here which handles incident data
