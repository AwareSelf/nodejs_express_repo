const fs = require('node:fs');
console.log('read the file');
 fs.readFile('index.txt',(err,data)=>{
   console.log(data.toString());
});
console.log('program continues..');