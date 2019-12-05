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