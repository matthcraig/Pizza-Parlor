//business logic
function Pizza(size, topping, price){
this.size = size;
this.topping = [];
this.toppingPrice = 1;
this.price = price;
}

//basic price based on size
Pizza.prototype.size = function(){
  let size = 12;
  if (this.size === "large"){
    size = size + 3;
  } else if (this.size === "medium") {
    size = size + 2;
  } else if (this.size === "small"){
    size = size;
  }
  this.size = size;
  return size;
}
let pizza = new Pizza(large);
console.log(pizza);


//add 1 for each topping
Pizza.prototype.toppings = function(){
  this.topping.push(topping);
  this.topping.toppingPrice++;
  return this.toppingPrice;
}

//calculate total price
Pizza.prototype.price = function(){
  this.price += this.toppingPrice + this.size;
  return this.price;
}


