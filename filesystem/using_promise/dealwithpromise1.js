const f = require('./fileop_usingpromise1');
const fs = require("node:fs/promises");

const dispfile =  (data)=>{
    console.log(data.toString());
    const p = fs.writeFile("readme1.txt",data);
    return p;
}

f()
.then(dispfile)
.then(()=>console.log('file write successful'))
.catch((err)=>console.log(err));

