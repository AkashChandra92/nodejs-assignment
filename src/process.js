const Bus = require("./Model/Bus");
const mongoose = require("mongoose");
const Entity = mongoose.model("testBus", Bus);

// function which sends all of the data to the database.
function processMessages(msg) {
  if (msg) {
    Entity.create({
      ...msg
    })
      .then(bus => {
        console.log({ added: bus });
      })
      .catch(err => console.log({ error: err }));
  } else {
  }
}


// function which sends all the data to the incident database
// This file will store another function to send data to the incident database
// Then start building Mongod2
// Make the connection in the same file and see if all data goes to the incident database
// Once successfull, apply the function to sort the incident data
// Finally write tests for everything required


module.exports = processMessages;

