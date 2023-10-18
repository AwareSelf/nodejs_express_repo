// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

var geek1= (msg) => {
	console.log("Message from geek1: " + msg);
};

var geek2 = (msg) => {
	console.log("Message from geek2: " + msg);
};

// Registering geek1 and geek2
eventEmitter.on('myEvent', geek1);
eventEmitter.on('myEvent', geek1);
eventEmitter.on('myEvent', geek2);

// Triggering myEvent
console.log("1st emit");
eventEmitter.emit('myEvent', "Event occurred");

// Removing listener geek1 that was
// registered on the line 13
eventEmitter.removeListener('myEvent', geek1);

// Triggering myEvent
console.log('2nd emit');
eventEmitter.emit('myEvent', "Event occurred");

// Removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');

// Triggering myEvent
console.log('3rd emit');
eventEmitter.emit('myEvent', "Event occurred");
