const fs = require("node:fs");

console.log('first');
fs.writeFileSync("./file1.txt","Hello Everyone!");
console.log('second');
const content = "Hi Everyone, how are you?";
//writeFile overwrites the content
fs.writeFile("./file1.txt",content,(err)=>{

    if(err)
    {
        console.log(err);
    }
    else {
        console.log("file written");
    }
});

console.log('jjjj');
//append mode appends the text to existing content
fs.writeFile("./file1.txt"," Welcome to Nodejs training!",{flag:"a"},(err)=>{

    if(err)
    {
        console.log(err);
    }
    else {
        console.log("file written");
    }
});
console.log('third');