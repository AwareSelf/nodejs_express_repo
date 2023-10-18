const express = require('express');
const app = new express();

const url = require('url');
const path = require('path');

app.use((req,res)=>{
    console.log('inside get request'+req.url);
    const filename = url.parse(req.url,true).pathname;
    console.log(filename);
    const p = path.join(__dirname,filename);
    console.log(p);
    res.sendFile(p);
})
app.listen(3000);