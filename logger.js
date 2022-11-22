const EventEmitter = require('events');

class Logger extends EventEmitter{
     log(name,passw){
        console.log("log  :"+name+" "+passw);
        this.emit("LoginEvent",{id:1,test:name});
    } 
}

module.exports=Logger;