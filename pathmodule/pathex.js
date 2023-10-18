const path = require('node:path');
//const path = require('path'); //this will also work, but its better to use prefix node: to make it clear 
                                //that it is node builtin module.
const data = require('./data.json');
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log(path.join("folder1","folder2","data.json"));
console.log(path.join(__dirname,"data.json"));
console.log(path.join("/folder1","//folder2","data.json"));
console.log(path.join("/folder1","//folder2","../data.json"));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));
console.log('parse'+path.parse(__filename));
let ob = path.parse(__filename);
console.log('format:'+path.format(ob));

console.log(path.resolve("folder1","folder2","data.json"));
console.log(path.resolve("/folder1","folder2","data.json"));
console.log(path.resolve("/folder1","//folder2","data.json"));
console.log(path.resolve("/folder1","//folder2","../data.json"));
console.log(path.resolve(__dirname,"data.json"));

var x = path.normalize('Users/Refsnes/../Jackson');
console.log(x);

//Create a path object:
var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
//Format the path object into a path string:
var p = path.format(obj);
console.log(p);
console.log('os seperator:'+path.sep);
console.log(path.delimiter);