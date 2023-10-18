const fs = require("node:fs");
const zlib = require("node:zlib");

gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file1.txt",
{encoding:"utf-8",
 highWaterMark:5 //default buffer size is 64kb, change it to 5bytes
});

//chaining with pipes
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));