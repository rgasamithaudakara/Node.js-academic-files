var events = require('events');
// Create EventEmitter object:
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventEmitter = function() {
    console.log('I hear someone screams');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventEmitter);
// Explanation: This says if eventEmiter is called with 'scream' as the parameter, myEventEmitter event handler must be called.

// Fire the 'scream' event:
eventEmitter.emit('scream');
// Explanation: eventEmiter event handler is invoked with 'stream' as the parameter.

