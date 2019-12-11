// This file connects to Nats and broadcasts the messages via websocket
const EventEmitter = require("events").EventEmitter;
const nc = require("./src/natsConnection");

class incidentBroadcaster extends EventEmitter {
  constructor() {
    super();
  }

  start() {
    this.broadcasting = true;
    const incidentBroadcast = () => {
      console.log("Broadcasting incidents...");
      nc.subscribe("vehicle.test-bus-1", msg => {
        if (msg.speed > 30) {
          // Incoming incident data is emitted as broadcast
          this.emit("incident data", msg);
          console.log("Incident data" ,msg);
        }
      });
    };
    incidentBroadcast();
  }

  end() {
    this.broadcasting = false;
  }
}

module.exports = incidentBroadcaster;
