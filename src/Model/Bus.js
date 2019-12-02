const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    time : {
        type : Date,
        required : true
    },
    energy : {
        type : Number,
        required : true
    },
    gps : {
        type : Date,
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

module.exports = mongoose.model('Bus', PostSchema)