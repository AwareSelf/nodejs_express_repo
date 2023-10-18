
 
// 1. Require the connection to the database.
var connection = require('./database').databaseConnection;

exports.getallusers = (req, res) => {
    let sql = 'SELECT * FROM user';
 
    connection.query(sql, (err, result) => {
      if (err) 
      {
         res.sendStatus(404).send('<p>No data found</p>');
      }
      else
      {
      console.log(result);
     //  res.setHeader('Content-Type','application/json');
      //  res.send(result);
      res.render('listusers',{userlist:result});
      }
  });
}

exports.getuser_byid =(req, res) => {

    console.log('inside delete user..');
    const id = req.params.id;
    console.log('select user with id:'+id);
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
  }

exports.adduser = (req,res)=>{
    console.log('inside post user..');
    console.log(req.body);
    const user = req.body;
    let id=user.id;
    let name=user.name;  
    let password=user.password;
    let profession=user.profession;

    var sql = `INSERT INTO user
            (
                id,name,password,profession
            )
            VALUES
            (
                ?,?,?,?
            )`;
     connection.query(sql, [id,name,password,profession], function (err, data) {

        if (err) {
            console.log(err);
         res.sendStatus(500).send('<p>Error saving User with id='+id+' and user name:'+name+'to db.');
            
         } else {
             console.log(data);
             res.send(data);
            }
     });
    
  }

  const insert_query = (id,name,password,profession)=>{
   
     
  }//end of insert_query

  exports.deluser = (req,res)=>{
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
  }//end of del_user

  exports.updateuser = (req,res)=>{
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
       
     } 
    else 
    {
        const ct = data.affectedRows;
        console.log('no of rows affected:'+ct);
        if(ct>=1)
        {
         // console.log('inside if as ct>=1, update success');
             res.end("<p>User with id="+id+"updated successfully!</p>");
        }
        else
        {

              //user with given id not present in db so insert it
         
              sql = `INSERT INTO user
              (
                  id,name,password,profession
              )
              VALUES
              (
                  ?,?,?,?
              )`;
            connection.query(sql, [id,name,password,profession], function (err, data) {
    
             
              if (err) {
                 
                 console.log(err);
                 res.sendStatus(500).send('<p>Error posting User with id='+id+' and user name:'+name+'to db.');
                
              } else {
                  console.log("inside put - inserting row in db"+data.affectedRows);
                  res.send("<p>user with id="+id+" created successfully!</p>");
                  
                 }
             });
            //         res.send("<p>User with id="+id+"not posted yet so cant be updated!</p>");
          
        }
      } 
    });
 }
   
  