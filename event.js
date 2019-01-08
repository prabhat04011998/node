const events=require('events');

let emitter= new events.EventEmitter();
emitter.on('newEvent',function (message){
    console.log(`Message :  ${message}`);
});
emitter.emit('newEvent','Hello prabhat this is me');