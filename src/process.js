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

// function which sends incident data to the database.
function processIncidentMessages(msg) {
  if (msg.speed >= 30 || msg.soc<30 ) {
    incidentEntity
      .create({
        ...msg
      })
      .then(bus => {
        console.log({ addedIncident: bus });
      })
      .catch(err => console.log({ error: err }));
  } 
}

exports.processMessages = processMessages
exports.processIncidentMessages = processIncidentMessages