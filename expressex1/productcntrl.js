/*
/product - get method - display product html form to fill product details
/product - post method - get product form details and show it on console
*/

const express = require('express');
const path = require('node:path');
const app = express();

app.use(express.urlencoded({extended:'true'}));
app.use(express.json());

app.get('/product',(req,res)=>{
   /* res.send(`<html>
               <body>
                 <form action="/product" method="post">
                   <input type='text' name='title' placeholder='product name'/>
                   <input type='submit' value='add product' />
                   </form>
                </body>
                <html>`
            );
            */
           res.sendFile(path.join(__dirname,'view','addproduct.html'));

})

app.post('/product',(req,res)=>{
    const product = req.body;
    console.log(product);
    res.send('<h3>new product created with product name as:'+product.title+'</h3>');
})

app.get('/product1',(req,res)=>{
    console.log('inside get product1..');
    const p = path.join(__dirname,'view','index1.html');
    console.log(p);
    res.sendFile(p); //view
})
app.post('/product1',(req,res)=>{
    const prod = req.body;
    console.log(prod);

    console.log('product prodid:'+prod.prodid);
    console.log('product prod name:'+prod.prodname);
    res.send('post product successful!');
})

app.listen(3000);