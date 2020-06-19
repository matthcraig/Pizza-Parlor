//business logic
function Pizza(size, topping, price){
this.size = size;
this.topping = topping;
this.price = price;
}


Pizza.prototype.size = function(){
  let size = 12;
  if (this.size === "large"){
    size = size + 3;
  } else if (this.size === "medium") {
    size = size + 2;
  } else if (this.size === "small"){
    size = size;
  }
  return size;
}