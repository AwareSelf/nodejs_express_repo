// app.js file.
var express = require('express');
var path = require('path');
var dao = require('./dao');

//express application
var app = express();
var port=3000;


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


app.get('/users', dao.getallusers);

app.get('/users/:id',dao.getuser_byid);

app.post('/user',dao.adduser)

app.delete('/user/:id',dao.deluser);

app.put('/user',dao.updateuser)


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