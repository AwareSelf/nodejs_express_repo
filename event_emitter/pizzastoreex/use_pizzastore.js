const PizzaStore = require('./pizzastore');
const DrinkMachine = require('./drinkmachine');

const ps = new PizzaStore();
const dm = new DrinkMachine();

ps.on("order",(size,topping)=>{
    console.log(`order received! baking a ${size} pizza with ${topping}`)
    dm.serveDrink(size);
 })

ps.order("large","mushroom");
ps.displayOrderNumber();