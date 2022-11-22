const os= require('os');

const basicInfo={
    name:os.type(),
    release: os.release(),
    uptime:os.uptime(),
    hostname:os.hostname(),
    userInfo:os.userInfo(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}

console.log(basicInfo);