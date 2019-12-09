// Running this file will start broadcasting, connect to the express server and websocket on the same port and get data to broadcast from Nats

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
const Routes = require("./src/BusModel/busRoutes");

// Create new Broadcaster
const broadcaster = new Broadcaster();

broadcaster.start();
broadcaster.on("msg", msg => {
  // Send data to all connected clients on websocket
//   Use socket to listen to messages
  wss.clients.forEach(socket => {
    socket.send(JSON.stringify(msg));
    console.log("Broadcasting a message:", msg);
  });
});

// Start listening on port 3000 for both express app and WS server
httpServer.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

// let the app use certain libraries
app.use(bodyParser.json());
app.use(cors());

app.use(Routes);

// Routes
app.get("/", (req, res) => {
  console.log("hello");
  res.json(`Express and websocket serber running together on ${port}`);
});


