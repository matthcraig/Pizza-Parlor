//biz logic here
function Pizza(size, topping){
  this.size = size;
  this.topping = topping;
  this.price = this.sizePrice + this.toppingPrice;
}

Pizza.prototype.sizePrice = function(){
  if (this.size === "large"){
      return 15;
  } else if (this.size === "medium"){
      return 13;
  } else if (this.size === "small"){
      return 11;
  } else {
      return 0;
  }
}
Pizza.prototype.toppingPrice = function(){
  if (this.topping === "olive"){
    return 1;
  } else if (this.topping === "mushroom"){
    return 2;
  } else if (this.topping === "special"){
    return 3;
  } else {
    return 0
  }
}
$(document).ready(function(){
  $("form#pizza").submit(function(event){
  let size = $("select#pizzaSize").val();
  let topping = $("select#toppings").val();
  let price = toppingPrice + sizePrice;
  let pizza = new Pizza(size, topping);


  $(".topping").text(pizza.isTopping());
  $(".pizza-time").text("Your pizza is a " + size + " with " + topping + " topping and will cost $" + price)
  event.preventDefault();
  });
});