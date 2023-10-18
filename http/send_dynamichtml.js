const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let html = fs.readFileSync("./file2.html","utf-8"); //sync will block not suitable for larger file
     html = html.replace("{{name}}","Namrata");
    res.end(html);
  
});
server.listen(3000,()=>{
    console.log('http server is listening on port 3000');
})