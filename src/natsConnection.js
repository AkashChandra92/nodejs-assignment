const NATS = require("nats");
const nc = NATS.connect({ json: true });

// This is where the connection is established
nc.on("connect", c => {
  console.log("Connected to NATS!");
});

module.exports = nc