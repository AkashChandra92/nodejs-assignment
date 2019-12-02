const NATS = require("nats");
let nc = NATS.connect({ json: true });
nc.on("connect", c => {
  console.log("Connected to NATS!");
});
nc.subscribe("vehicle.test-bus-1", msg => {
  console.log(msg);
}); 