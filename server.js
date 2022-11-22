const http= require('http');

// const server= http.createServer();
// creating with socket without callback
// server.on("connection",(socket)=>{
//     console.log("new connection established .."+socket.localPort);
// });

// creating with callback

const server= http.createServer((req, res)=>{
    console.log("entered"+req.url);
    
    if (req.url === '/'){
        res.write('hello connected');
        res.end();
    }
});

server.listen(3000);
console.log("listening connection");