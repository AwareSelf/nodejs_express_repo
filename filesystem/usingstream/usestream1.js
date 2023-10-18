//step 1:get node fs package
const fs = require("node:fs");

//step 2:create a readable stream
const readableStream = fs.createReadStream('file1.txt');

//step 3:set the encoding to be utf8. 
readableStream.setEncoding('UTF8');

//stream internally extends from event emitter, so we can register a listener
//step 4: register a event listener to listen to streamed data when available in buffer
readableStream.on("data",(chunk)=>{

    //step 5: log the data to console, if you wish to display as well as write to a file.
    console.log(chunk);
  
})

//step 6: register a listener to listen to stream end event
readableStream.on('end',function() {
    console.log('read stream has ended');
    
 });
 
//step 9: register a listener to listen to stream error event. 
 readableStream.on('error', function(err) {
    console.log('error while reading a stream..')
    console.log(err.stack);
 });
 
 console.log("Program Ended");