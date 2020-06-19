//business logic
function Pizza(size, topping, toppingPrice, price, totalPrice){
this.size = size;
this.topping = topping;
this.toppingPrice = toppingPrice;
this.price = price;
this.totalPrice = totalPrice;
}

//basic price based on size
Pizza.prototype.sizePrice = function(){
  let sizeprice = 0;
  if (this.size === "small"){
    sizeprice = 11;
  } else if (this.size === "medium") {
    sizeprice = 12;
  } else if (this.size === "large") {
    sizeprice = 14
  } 
  this.price = sizeprice;
  return this.price;
}
// add 1 for each topping
Pizza.prototype.toppingCost = function(){
  let addOn = 0
    if (this.topping === "mushroom") {
      addOn = 1;
    } else if (this.topping === "mushroom"){
      addOn = 2;
    } else if (this.topping === "mushroom"){
      addOn = 3;
    } else {
      this.price += addOn;
      return this.toppingPrice;  
    }
  }
//calculate total price
Pizza.prototype.total = function(){
this.totalPrice = (this.price + this.toppingPrice);
return this.totalPrice;
}

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