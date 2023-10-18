const f = require('./fileop_usingpromise1');

const dispfile =  (data)=>{
    console.log(data);
}

f()
.then(dispfile)
.catch((err)=>console.log(err));

