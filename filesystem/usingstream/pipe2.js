const fs = require("fs");

let rs = fs.createReadStream("./file1.txt");
let ws = fs.createWriteStream("./file3.txt");

function callback(msg) {
	console.log(msg);
}

// pipeReadToWrite() accepts two streams a 
// readStream and s writeStream and a callback function.
function pipeReadToWrite(readStream, writeStream, callback) {
	// handles any error occurred in the stream
	function handleError(err) {
		// close the streams and call callback
		readStream.close();
		writeStream.close();
		callback(err);
	}

	readStream
		.on("error", handleError) 
		.pipe(writeStream)
		.on("error", handleError)
		.on("finish", ()=>console.log('stream finished..'));
}

pipeReadToWrite(rs, ws, callback);
