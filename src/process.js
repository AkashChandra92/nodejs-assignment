const Bus = require("./BusModel/Bus");
const mongoose = require("mongoose");
const Entity = mongoose.model("testBus", Bus);
const incidentBus = require("./IncidentModel/incidentBus");
const incidentEntity = mongoose.model("incidentBus", incidentBus);

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
    console.group("Something went wrong");
  }
}

// function which sends all the data to the incident database.
function processIncidentMessages(msg) {
  if (msg.speed >= 20 ) {
    console.log('msg speed', msg.speed)
    incidentEntity
      .create({
        ...msg
      })
      .then(bus => {
        console.log({ addedIncident: bus });
      })
      .catch(err => console.log({ error: err }));
  } else {
    // console.log("Something went wrong");
  }
}


// Then start building Mongod2
// Make the connection in the same file and see if all data goes to the incident database
// Once successfull, apply the function to sort the incident data
// Finally write tests for everything required

exports.processMessages = processMessages
exports.processIncidentMessages = processIncidentMessages