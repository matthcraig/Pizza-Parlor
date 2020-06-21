//biz logic here

let toppingPrice = 0;
let sizePrice = 0;
function Pizza(size, topping, price){
  this.size = size;
  this.topping = topping;
  this.price = function(){
    sizePrice + toppingsPrice;
  }
}
Pizza.prototype.isSize = function(){
  if (this.size === "large"){
  sizePrice = 15;
  } else if (this.size === "medium"){
  sizePrice = 13;
  } else if (this.size === "small"){
  sizePrice = 11;
  }
  return sizePrice
}
Pizza.prototype.isTopping = function(){
  if (this.topping === "olive"){
  toppingPrice = 1;
  } else if (this.topping === "mushroom"){
  toppingPrice = 1;
  } else if (this.topping === "special"){
  toppingPrice = 2;
  }
  return toppingPrice;
}
$(document).ready(function(){
  $("form#pizza").submit(function(event){
  let size = $("select#pizzaSize").val();
  let topping = $("select#toppings").val();
  let price = toppingPrice + sizePrice;
  
  let pizza = new Pizza(size, topping, price);
  $(".topping").text(pizza.isTopping());
  $(".pizza-time").text("Your pizza is a " + size + " with " + topping + " topping and will cost $" + price)
  event.preventDefault();
  });
});



/*
//business logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings || [];
// put a total price function here
}

//basic price based on size
Pizza.prototype.sizePrice = function(size){
  const sizePrices = {11:"small", "medium": 12, "large": 14};
  return sizePrices[size] || 0;
}
// add 1 for each topping
Pizza.prototype.toppingPrice = function(){
  const toppingPrices = {"olive": 1, "mushroom": 1, "special": 1};
  return this.toppings;
}

Pizza.prototype.totalPrice = function(){
  let toppingsPrice = this.toppings.reduce((sum, toppings) => sum + this.toppingPrice(toppings));
  return this.sizePrice(this.size) + toppingsPrice;
}

//UI logic

$(document).ready(function(){
$("form#pizza").submit(function(event){
let size = $("select#pizzaSize").val();
let toppings = $("select#toppings").val();

let pizza = new Pizza(size, toppings);
$(".pizza-time").text("Your pizza is a " + size + " with " + toppings + " topping and will cost $" + pizza.toppingPrice());
event.preventDefault();
});
});*/