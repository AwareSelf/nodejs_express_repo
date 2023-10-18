// 1. 
require('dotenv').config();

const port = process.env.NODE_PORT;
console.log(port);
const express = require('express');
const app = new express();

app.get('/',(req,res)=>{
    res.end("Hello World");
});
app.listen(port,()=>{
    console.log('server listening on port:'+port);
});
