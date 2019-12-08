const nc = require('./natsConnection')
const createConnection = require("./mongoose");
const processMessages = require("./process");

// To enter the data into the database directly from the stream, the connection has to be made in  the same file.
// Connection to the mongod instance made here which connects to the main database
createConnection();

// Data starts flowing from nats (pub-sub model) and is send to the database for persistence
nc.subscribe("vehicle.test-bus-1", msg => {
  processMessages(msg);
  console.log(msg)
})

// Connection to the mongod instance made here which handles incident data


