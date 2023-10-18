// 1.
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
// 2.
const app = express();
app.use(express.urlencoded({extended: true}));
//app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views","./views");


// 3.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'namrata',
    database: 'mydb3'
});
// 4.
connection.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));
// 5.
app.get('/emps', (req, res) => {
  
    let sql = 'SELECT * FROM emp';
   connection.query(sql, (err, result) => {
        if (err) 
        {
           res.sendStatus(404).send('<p>No data found</p>');
        }
        else
        {
        console.log(result);
        res.render('listemp',{emplist:result});
        }
    });
});

app.get('/',(req,res)=>{
     res.render('index');
})

app.get('/emp',(req,res)=>{

 // res.sendFile(path.join(__dirname,'emp.html'));
   res.render('addemp');
})

app.post('/emp',(req,res)=>{
    console.log('inside post emp..');
    var sql = `INSERT INTO emp 
            (
                empid,name
            )
            VALUES
            (
                ?, ?
            )`;
    console.log(req.body);
    const e = req.body;
let empid=e.empid;
let empname=e.empname;            
connection.query(sql, [empid,empname], function (err, data) {
    if (err) {
       console.log(err);
  //  res.sendStatus(500).send('<p>Error saving Emp with empid='+empid+' and emp name:'+empname+'to db.');
        res.status(500).render('empfailure',e);
    } else {
        console.log(data);
    //    res.send('<p>Emp with empid='+empid+' and emp name:'+empname+' is posted successfuly</p>');
         res.render('empsuccess',e);
        }
   });
})


app.delete('/emp/:id',(req,res)=>{
    console.log('inside delete emp..');
    const id = req.params.id;
    console.log('delete emp with id:'+id);
    var sql = `DELETE FROM emp 
           WHERE empid = ?`;
             
connection.query(sql, [id], function (err, data) {
    if (err) {
       console.log(err);
   res.sendStatus(500).send('<p>Error deleting Emp with empid='+id+'from db.');
        
    } else {
        console.log(data);
        res.send('<p>Emp with empid='+id+' deleted successfuly</p>');
        
        }
   });
});
 // Close the connection.
function closeconnection()
{ 
connection.end(err => {
    if(err) throw err;
    console.log("Connection closed.");
});
}

app.listen(3000);