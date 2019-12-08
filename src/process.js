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

module.exports = processMessages;

