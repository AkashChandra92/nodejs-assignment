const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const WebSocket = require("ws");
const http = require("http");

// Connect to the port
port = 3000;

// Broadcaster is a class that emit event when a new datapoint arrive
const Broadcaster = require("./broadcaster");

// Create own HTTP server instead of using app.listen() in order to share the same port with WS
const httpServer = http.createServer(app);

// Initiate websocket server with the same server as express
const wss = new WebSocket.Server({ server: httpServer });

// Import Routes to use in the app
const Routes = require("./src/Model/routes");

// Create new Broadcaster
// const broadcaster = new Broadcaster();

// broadcaster.start();
// broadcaster.on("data", data => {
//   // Send data to all connected clients on websocket
//   wss.clients.forEach(socket => {
//     socket.send(JSON.stringify(data));
//   });
// });

// Start listening on port 3000 for both express app and WS server
httpServer.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

// Make the app listen
// app.listen(port);

// let the app use certain libraries
app.use(bodyParser.json());
app.use(cors());

app.use(Routes);

// Routes
app.get("/", (req, res) => {
  console.log("hello");
  res.json(`Running on ${port}`);
});

// console.log("Express server is running")

// const Entity = mongoose.model('Hjk', Bus);
// hjk is the name of the document

// Entity.create({ time : 11/02/2019, energy : 42, gps: 35, odo: 23, speed: 27, soc : 45}).then(console.log)

// module.exports = connectionString;
