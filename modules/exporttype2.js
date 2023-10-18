const add = (a,b)=> a+b;

const subtract = (a,b)=>a-b;
//CommonJs syntax of exporting and importing modules
module.exports = {
    add, 
    sub:subtract
}