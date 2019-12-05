// const streamToMongoDB = require('stream-to-mongo-db').streamToMongoDB;
const Bus = require("./Model/Bus")
const mongoose = require('mongoose');
const Entity = mongoose.model('testBus', Bus);
const connectionString =
"mongodb://localhost:27017";
mongoose.connect(connectionString, { useNewUrlParser: true }, () =>
  console.log("Connected to DB yoooo!")
);

const NATS = require("nats");
let nc = NATS.connect({ json: true });

nc.on("connect", c => {
  console.log("Connected to NATS!");
});

nc.subscribe("vehicle.test-bus-1", msg => {
  processMessages(msg)
});

function processMessages(msg) {
  if (msg) {
    Entity.create({
      ...msg
    }).then(bus => {
      console.log({ added: bus });
    }).catch(err => console.log({ error: err }))
  } else {

  }
}

// // where the data will come from
// const connection = mongoose.connect(nc)
// const Mymodel = mongoose.model('Bus', BusSchema)

// // where the data will end up
// const outputDBConfig = { dbURL : 'mongodb://localhost:27017' }

// // create the writable stream
// const writableStream = streamToMongoDB(outputDBConfig)

// // create readable stream and consume it  
// const stream = MyModel.find().lean().stream();
 
// stream.pipe(writableStream);
 
// stream.on('end', () => {
//     console.log('done!');
//     connection.close();
// });
