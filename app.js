const EventEmitter = require('events');
const Logger= require('./logger');

const logger= new Logger();
logger.on("LoginEvent", (args)=> {
    console.log("event: "+args);
});

logger.log("abc","listener");



