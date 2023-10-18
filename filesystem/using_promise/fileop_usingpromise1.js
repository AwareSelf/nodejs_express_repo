const fs = require("node:fs/promises");


function readMyFile()
{
console.log('first');

const p = fs.readFile("readme.txt","utf-8");
console.log('after non-blocking readFile remaining progrm continues..');
return p;
}

module.exports=readMyFile;



