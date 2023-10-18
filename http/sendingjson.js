const http = require("node:http");

const server = http.createServer((req,res)=>{
    const myinfo = {
        "firstName":"Namrata",
        "lastName":"Marathe"
    }
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(myinfo)); //once end is called can't send/write anything to response

});
server.listen(3000,()=>{
    console.log('http server is listening on port 3000');
})