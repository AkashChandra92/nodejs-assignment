const mongoose = require("mongoose");
const incidentBus = require("./IncidentModel/incidentBus");

function createdbConnection() {
  // The connection string is used to connect to mongod instance(server)
  const connectionString = "mongodb://localhost:27017";

  // Connection to the mongod instance made here
  mongoose.connect(connectionString, { useNewUrlParser: true }, () =>
    console.log("Connected to DB which stores all data yoooo!")
  );
}

exports.createdbConnection = createdbConnection;
