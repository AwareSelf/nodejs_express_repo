const fs = require("node:fs");

console.log('first - sync read-write');
const readContent = fs.readFileSync("./file.txt","utf-8");
console.log(readContent);
console.log('second - async read-write');
fs.readFile("./file.txt","utf-8",(err,data)=>{

    if(err)
    {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
console.log('third');