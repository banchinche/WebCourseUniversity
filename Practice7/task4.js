const evt = require('events')
const emitter = new evt.EventEmitter()

emitter.on('event', function(a, b){
    console.log(a, b)
})

emitter.emit('event', 5, 6)
