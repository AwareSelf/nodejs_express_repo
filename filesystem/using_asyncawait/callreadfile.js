const f = require('./readfileop'); //f is nothing but readMyFile funct

try
{
const data = f();
console.log(data);
}
catch(err){
    console.log(err);
}
console.log('program continues..');