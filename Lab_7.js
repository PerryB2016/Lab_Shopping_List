var groceryList = [
  {
    name: "Bread", price: 2.00
  },

  {
    name: "Eggs", price: 3.00
  },

  {
    name: "Cereal", price: 4.00
  }

];

var total = 0;


groceryList.forEach(function(el) {
  console.log(el.name +" "+ el.price);
  total += el.price;
  });

console.log("Total Cost " + total);
