const fs = require("node:fs");

const readableStream = fs.createReadStream("file1.txt",
{encoding:"utf-8",
 highWaterMark:5 //default buffer size is 64kb, change it to 5bytes
});

const writableStream = fs.createWriteStream("file2.txt");

readableStream.pipe(writableStream);