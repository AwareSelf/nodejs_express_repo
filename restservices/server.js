const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.get('/users', function (req, res) {
 //  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    fs.readFile( path.join(__dirname,"users.json"), 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
 })

 app.get('/user',function(req,res){
    console.log('inside addUser get request..');
    const p = path.join(__dirname,'index.html');
    console.log(p);
    res.sendFile(p);
 });
 app.post('/user', function (req, res) {
    console.log('inside /addUser post request');
    console.log(req.body);
    let user = req.body;
     // First read existing users.
   fs.readFile( path.join(__dirname,"users.json"), 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       data = JSON.stringify(data);
       //write new user to json file
       fs.writeFile("./users.json",data,(err)=>{

        if(err)
        {
            console.log(err);
            res.sendStatus(500).end('<p>error writing user to json file!</p>');
        }
        else {
            console.log("file written");
            res.end(data);
        }
       });//end of writeFile callback
      
    }); //end of readfile callback
   
 }) //end of post callback

 app.get('/user/:id', function (req, res) {
    // First read existing users.
    fs.readFile( path.join(__dirname,"users.json"), 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

 app.delete('/user/:id', function (req, res) {
    // First read existing users.
    fs.readFile(path.join(__dirname,"users.json"), 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id];
        
       console.log( data );
       data = JSON.stringify(data);
       //write new user to json file
       fs.writeFile("./users.json",data,(err)=>{

        if(err)
        {
            console.log(err);
            res.sendStatus(500).end('<p>error writing user to json file!</p>');
        }
        else {
            console.log("file written");
            res.end(data);
        }
       });//end of writeFile callback
      
       res.end(data);
    });
 })

 app.put('/user', function (req, res) {
    console.log('inside /addUser post request');
    console.log(req.body);
    let user = req.body;
     // First read existing users.
   fs.readFile( path.join(__dirname,"users.json"), 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       data = JSON.stringify(data);
       //write new user to json file
       fs.writeFile("./users.json",data,(err)=>{

        if(err)
        {
            console.log(err);
            res.sendStatus(500).end('<p>error writing user to json file!</p>');
        }
        else {
            console.log("file written");
            res.end(data);
        }
       });//end of writeFile callback
      
    }); //end of readfile callback
   
 }) //end of post callback
app.listen(3000);