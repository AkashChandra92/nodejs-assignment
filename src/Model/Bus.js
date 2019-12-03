const mongoose = require("mongoose");

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
        type : Number,
        default : Date.now
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