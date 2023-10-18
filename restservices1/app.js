// app.js file.
var express = require('express');
var path = require('path');
var app = express();
var port=3000;
 
// 1. Require the connection to the database.
var connection = require('./database').databaseConnection;
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views","./views");


app.get("/", (req, res) => {
 // res.json({ message: "ok" });
    res.redirect('/user');
});

app.get('/user',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
})


app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM user';
 
    connection.query(sql, (err, result) => {
      if (err) 
      {
         res.sendStatus(404).send('<p>No data found</p>');
      }
      else
      {
      console.log(result);
       res.setHeader('Content-Type','application/json');
        res.send(result);
      // res.render('listusers',{userlist:result});
      }
  });
});

app.get('/users/:id', (req, res) => {

  console.log('inside delete user..');
  const id = req.params.id;
  console.log('delete user with id:'+id);
  let sql = 'SELECT * FROM user where id = ?';

  connection.query(sql,[id], (err, result) => {
    if (err) 
    {
       res.sendStatus(404).send('<p>User with id='+id+' not found</p>');
    }
    else
    {
    console.log(result);
      res.setHeader('Content-Type','application/json');
       res.send(result);
   //  res.render('listusers',{userlist:result});
   }
});
});

app.post('/user',(req,res)=>{
  console.log('inside post user..');
  var sql = `INSERT INTO user
          (
              id,name,password,profession
          )
          VALUES
          (
              ?,?,?,?
          )`;
  console.log(req.body);
  const e = req.body;
let id=e.id;
let name=e.name;  
let password=e.password;
let profession=e.profession;

connection.query(sql, [id,name,password,profession], function (err, data) {
  if (err) {
     console.log(err);
  res.sendStatus(500).send('<p>Error saving User with id='+id+' and user name:'+name+'to db.');
     
  } else {
      console.log(data);
      res.send(data);
     }
 });
})

app.delete('/user/:id',(req,res)=>{
  console.log('inside delete user..');
  const id = req.params.id;
  console.log('delete user with id:'+id);
  var sql = `DELETE FROM user 
         WHERE id = ?`;
           
connection.query(sql, [id], function (err, data) {
  if (err) {
     console.log(err);
 res.sendStatus(500).send('<p>Error deleting User with id='+id+'from db.');
      
  } else {
      console.log(data);
      res.send('<p>User with id='+id+' deleted successfuly</p>');
      
      }
 });
});

app.put('/user',(req,res)=>{
  console.log('inside put user..');
  var sql = `UPDATE user
             set name=?,password=?,profession=?
             where id=?
              `;
  console.log(req.body);
  const e = req.body;
let id=e.id;
let name=e.name;  
let password=e.password;
let profession=e.profession;

connection.query(sql, [name,password,profession,id], function (err, data) {
  if (err) {
     console.log(err);
  res.sendStatus(500).send('<p>Error updating User with id='+id+' and user name:'+name+'to db.');
     
  } else {
      console.log(data);
      res.send(data);
     }
 });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
We will need to link our Node.js server with MySQL to 
create our CRUD API. 
We’ll use the mysql2 package to interact with the MySQL database.

First, we need to install mysql2 using the command below at the project 
root directory:
npm i mysql2
*/