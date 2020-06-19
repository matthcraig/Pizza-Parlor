//business logic
function Pizza(size, topping, price){
this.size = size;
this.topping = topping;
this.price = price;
}

//basic price based on size
Pizza.prototype.sizePrice = function(){
  let sizeprice = 11;
  if (this.size === "large"){
    return sizeprice + 3;
  } else if (this.size === "medium") {
    return sizeprice + 1;
  } else {
    return sizeprice;
}
}
// add 1 for each topping
  Pizza.prototype.toppings = function(){
  let toppingprice = 0
    if (this.topping === "mushroom") {
      return toppingprice + 1;
    } else if (this.topping === "olives"){
      return toppingprice + 1;
    } else if (this.topping === "special"){
      return toppingprice + 1;
    } else {
      return toppingprice;
    }
}

//calculate total price
  Pizza.prototype.totalPrice = function(){
  this.price = (size + topping);
  return this.price;
}

//UI logic

$(document).ready(function(){
$("form#pizza").submit(function(event){
let size = $("select#pizzaSize").val();
let topping = $("select#toppings").val();

let pizza = new Pizza(size, topping);
$(".topping").text(pizza.toppings())
$(".pizza-time").text("Your pizza is a " + size + " with " + topping + " topping and will cost $" + pizza.sizePrice());
event.preventDefault();
});
});