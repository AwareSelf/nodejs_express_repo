const express = require('express');


const app = express();

app.use((req,res)=>{

})
app.use('/greet',(req,res,next)=>{

     //process ur req
     //generateresp

     //send the response
     console.log(req.url);
     console.log(req.method);
     res.send('<p>Hi Everyone</p>');
          // next();
});

app.use('/home',(req,res)=>{
    res.send('<h3>This is book library</h3>');
})


app.get('/book',(req,res)=>{
    console.log(req.body);
})

app.get('/about',(req,res)=>{
    res.send('about this website');
})

app.listen(3000);