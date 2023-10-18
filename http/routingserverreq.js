const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("<h3>Home page!</h3>"); 

    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About Page"); 

    }
    else if(req.url==='/api')
    {
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"firstName":"Namrata",
                                "lastName":"Marathe"})); 
    }
    else
    {
       res.writeHead(404);
       res.end("Page Not Found!");
    }
   
});
server.listen(3000,()=>{
    console.log('http server is listening on port 3000');
})