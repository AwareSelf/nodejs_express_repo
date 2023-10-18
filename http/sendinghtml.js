const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
   // res.end("<p>Hello World</p>"); 
 //  const html = fs.readFileSync("./file1.html","utf-8"); //sync will block not suitable for larger file
  // res.end(html);
  fs.createReadStream(path.join(__dirname,"file1.html")).pipe(res);


});
server.listen(3000,()=>{
    console.log('http server is listening on port 3000');
})