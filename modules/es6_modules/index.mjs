/*
//if it is a default export we can assign any name 
//while importing .like math in below line
import math from './addsub.mjs';
const {add,sub} = math; //destructuring in JS 

console.log(add(5,5));
console.log(sub(10,5));
*/

//if its not default export then use as syntax or exact names
//of the functions exported in {}
import * as math from './addsub1.mjs'; //way1:non-default export
console.log(math.add(5,5));
console.log(math.sub(10,5));

import {add,sub} from './addsub1.mjs';  //way2:use exact names for non-default export
console.log(add(15,5));
console.log(sub(15,5));