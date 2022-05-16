let evt = require('events')
let emitter = new evt.EventEmitter()

function test(){
    console.log('event was called')
}

emitter.on('first', test)
emitter.emit('first')
emitter.removeListener('first', test)
emitter.once('second', test)
emitter.emit('second')
