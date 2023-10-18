var express = require('express');
var app = express();
const path = require('node:path');
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_db');
mongoose.connect('mongodb://127.0.0.1:27017/my_db?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1');
var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

//create model class
var Person = mongoose.model("Person", personSchema);

//create document from model
var newPerson = new Person({
    name: "Namrata123",
    age: 48,
    nationality: "Indian"
 });

 var newPerson1 = new Person({
   name: "Rahul",
   age: 30,
   nationality: "Indian"
});

//save the document to Person model collection
 const promise = newPerson.save();
 promise.then((res)=>
 {
    console.log(res);
 },(err)=>{

    console.log(err);
 });
 
 const promise1 = newPerson1.save();
 promise1.then((res)=>
 {
    console.log(res);
 },(err)=>{

    console.log(err);
 });
 

 //post method will post the person object that we will save to mongodb as new person document
app.post('/people', function(req, res){
   const person = req.body;
   const myname = person.name;
   const myage = person.age;
   const mynationality = person.nationality;

   var newPerson = new Person({
       name: myname,
       age: myage,
       nationality: mynationality
    });

    newPerson.save()
    .then(()=>{
      res.send('<p>Person with name='+myname+' posted succesfuly</p>');
    })
});

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/people', function(req, res){
   Person.find().then((response)=>{
      res.json(response);
   }); 
});

app.get('/people1/:name', function(req, res){

   const myname = req.params.name;
   console.log(myname);
   Person.find({name:myname}).then((response)=>{
      res.json(response);
   }); 
});
app.listen(3000);