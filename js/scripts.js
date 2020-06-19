//business logic
function Pizza(size, topping, price){
this.size = size;
this.topping = topping;
this.price = price;
}

//basic price based on size
Pizza.prototype.size = function(){
  this.size = size;
  if (this.size === "large"){
    this.size = 15;
  } else if (this.size === "medium") {
    this.size = 13;
  } else {
    this.size = 11;
  }
  this.price();
}

//add 1 for each topping
//Pizza.prototype.toppings = function(){
//  this.topping.push(topping);
//  this.toppingPrice++;
//  this.price();
//}

//calculate total price
Pizza.prototype.price = function(){
  this.price = this.topping + this.size;
  return this.price;
}
let pizza = new Pizza(size, topping, price);
let price = pizza.price();
//UI logic

$(document).ready(function(){
$("form").submit(function(event){
let size = $("select#pizzaSize").val();
let topping = $("select#toppings").val();


$(".btn-info").text(price);
event.preventDefault();
})
})

