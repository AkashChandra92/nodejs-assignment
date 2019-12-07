const mongoose = require("mongoose");

// Ths bus model made according to the incoming data from Nats. 
const BusSchema = new mongoose.Schema({
    time : {
        type : Date,
        required : true
    },
    energy : {
        type : Number,
        required : true
    },
    gps : {
        type : String,
    },
    odo :{
        type: Number,
    },
    speed: {
        type: Number
    },
    soc : {
        type : Number
    }
})

// module.exports = mongoose.model('Bus', PostSchema)
module.exports = BusSchema