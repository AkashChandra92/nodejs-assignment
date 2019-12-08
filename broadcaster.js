// This file connects to Nats and broadcasts the messages via websocket
const EventEmitter  = require("events").EventEmitter
const nc = require('./src/natsConnection')

class Broadcaster extends EventEmitter {
	constructor() {
		super()
	}

	start() {
		this.broadcasting = true
		const broadcast = () => {
			console.log("Broadcasting...")
			nc.subscribe("vehicle.test-bus-1", msg => {
                // Incoming data is emitted as broadcast
                this.emit("data", msg)
                console.log(msg);
            });
		}
		broadcast()
	}

	end() {
		this.broadcasting = false
	}
}

module.exports = Broadcaster