

var fruits = {
  fruit: ['Apple', 'Orange', 'Mango'],
  getFruits: function () {
    return this.fruit;
  },
  showFruits: function (fruits) {
    console.log(fruits);
  }
};


var myFruits = fruits.getFruits();
fruits.showFruits(myFruits);

myFruits.forEach(function (v) {
  console.log(v)
})