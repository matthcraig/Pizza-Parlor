//business logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings || [];
// put a total price function here
}

//basic price based on size
Pizza.prototype.sizePrice = function(size){
  const sizePrices = {"small": 11, "medium": 12, "large": 14};
  return sizePrices[size] || 0;
}
// add 1 for each topping
Pizza.prototype.toppingPrice = function(){
  const toppingPrices = {}
  return this.toppingPrice;
}

Pizza.prototype.totalPrice = function(){
  let toppingsPrice = this.toppings.reduce((sum, topping) => sum + this.toppingPrice(topping));
  return this.sizePrice(this.size) + toppingsPrice;
}

//linters
//calculate total price
//Pizza.prototype.total = function(){
//this.totalPrice = (this.price + this.toppingPrice);
//return this.totalPrice;
//}

//UI logic

$(document).ready(function(){
$("form#pizza").submit(function(event){
let size = $("select#pizzaSize").val();
let topping = $("select#toppings").val();

let pizza = new Pizza(size, topping);
$(".pizza-time").text("Your pizza is a " + size + " with " + topping + " topping and will cost $" + pizza.total());
event.preventDefault();
});
});