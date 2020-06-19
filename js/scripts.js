//business logic
function Pizza(size, sizePrice, topping, toppingPrice, price){
this.size = size;
this.sizePrice = sizePrice;
this.topping = [];
this.toppingPrice = toppingPrice
this.price = price;
}

//basic price based on size
Pizza.prototype.size = function(){
  this.size = size;
  if (this.size === "large"){
    this.sizePrice = 15;
  } else if (this.size === "medium") {
    this.sizePrice = 13;
  } else if (this.size === "small"){
    this.sizePrice = 11;
  }
  this.price();
}

//add 1 for each topping
Pizza.prototype.toppings = function(){
  this.topping.push(topping);
  this.topping.toppingPrice++;
  this.price();
}

//calculate total price
Pizza.prototype.price = function(){
  this.price = this.toppingPrice + this.sizePrice;
  return this.price;
}

//UI logic
let pizza = new Pizza()
$(document).ready(function(){
$("form#pizza").submit(function(event){
const inputPizzaSize = $("select#pizzaSize").val();
const inputToppings = $("select#toppings").val();
})
})

