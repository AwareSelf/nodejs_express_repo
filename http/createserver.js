const http = require("node:http");

const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html"});
//    res.end("Hello Everyone!"); //once end is called can't send/write anything to response
    res.end('<p>Hi All</p>');
});
console.log('jjj');
server.listen(3000,()=>{
    console.log('http server is listening on port 3000');
})