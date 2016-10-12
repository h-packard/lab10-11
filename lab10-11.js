/*var grocShpng = {
	item: ['Apple', 'Pineapple', 'Pear', 'Duck'],
	price: [0.50, 2.25, 0.75, 10.99]
};

grocShpng.forEach(organize);
console.log(organize);

*/

var apples = {
	name: 'apples',
	price: 1
};
var bread = {
	name: 'bread',
	price: 2
};
var milk = {
	name: 'milk',
	price: 3
};

var groceries = [apples, milk, bread];
groceries.forEach(function(element){
	console.log(element.item + ' $' element.price);
})