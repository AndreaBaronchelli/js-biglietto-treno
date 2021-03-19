/*************************************************
 * PRICE CALCULATOR
 *************************************************/

/*
TASKS
    1 - ask km numbers
    2 - ask utent age
    3 - calc price (0.21€/Km discount for <18 and >65) 
*/

//1
var km = parseInt( prompt("How many km do you have to do?") );
//console.log(km);

//2
var age = parseInt( prompt("What's your age?") );
//console.log(age);

//3
var price = km * 0.21;
//console.log(price);

var discount;
if (age < 18) {
    discount = (price * 20) / 100
} else if (age >= 65) {
    discount = (price * 40) / 100
}
//console.log(discount);

var finalPrice = (price - discount).toFixed(2);
//console.log(finalPrice);
