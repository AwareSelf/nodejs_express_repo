const EventEmitter = require("node:events");
const eem = new EventEmitter();

eem.on("order",(size,toppings)=>{
    console.log("ordered "+size+" pizza with topping of "+toppings);
})

//non-blocking 
eem.on("order",(size)=>{
    if(size==='large')
     console.log("you get a free coke for large size pizza!")
})
//as event-listener are non-blocking below line will execute
console.log("do your work before event occurs.."); 
eem.emit("order","large","mushroom");
eem.emit("order","small","mushroom");


