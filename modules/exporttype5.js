const add = (a,b)=> a+b*2;

const subtract = (a,b)=>2*a-b;

/*
exports = {
    addy:add,
    suby:subtract
}
*/
//use either
/*
module.exports = {
    addy:add,
    suby:subtract
}
//or
module.exports.addy =add;
module.exports.suby = subtract;
//or
*/
exports.addy=add;
exports.suby=subtract;
//but not exports = {}