const fs = require('node:fs');
console.log('read the file');
const data = fs.readFileSync('index.txt');
console.log(data.toString());
console.log('program continues..');