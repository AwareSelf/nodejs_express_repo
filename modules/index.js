/*
require('./add');
console.log('inside index.js');

const addd = require('./add1');
const sum = addd(5,5);
const sum1 = addd(10,10);
*/
require("./batman");
require("./superman");

//module caching - sec load will not actually load a module
//again but use already loaded module from cache so hero1.name is
//printed as superman
/*
const hero = require('./superhero');
console.log(hero.name);
hero.setName("superman");
console.log(hero.name);

const hero1 = require('./superhero');
console.log(hero1.name);

//soln:export the class Superman instead of instamce of Superman
const Superman = require('./superhero1');
const hero2 = new Superman("batman");
console.log(hero2.getName());
hero2.setName("superman");
console.log(hero2.getName());
const hero3 = new Superman("hanuman");
console.log(hero3.getName());


//diff tyepes of export-import
const math = require('./exporttype2');
console.log(math.sub(10,5));
console.log(math.add(5,5));

const {sub,add} = require('./exporttype2');
console.log(sub(10,5));
console.log(add(5,5));

const {subx,addx} = require('./exporttype3');
console.log(subx(10,5));
console.log(addx(5,5));

const x = require('./exporttype4');
console.log(x.addn(10,5));
console.log(x.subn(5,5));

//exports and module.exports is not same in this case
//you are assigning a new object to exports
const x1 = require('./exporttype5');
console.log(x1.addy(10,5));
console.log(x1.suby(5,5));
*/
