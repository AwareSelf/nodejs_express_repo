const EventEmitter = require("node:events");
class PizzaStore extends EventEmitter
{
    constructor()
    {
        super();
        this.orderNo = 0;
    }

    order(size,topping)
    {
       this.orderNo++;
       this.emit("order",size,topping);
    }

    displayOrderNumber()
    {
        //console.log(`Current order no ${this.orderNo}`);
        console.log('Current order no '+this.orderNo);
    }

}
module.exports = PizzaStore;