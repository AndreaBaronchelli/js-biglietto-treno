/*************************************************
 * PRICE CALCULATOR
 *************************************************/

/*
TASKS
    1 - ask km numbers
    2 - ask utent age
    3 - calc price (0.21€/Km discount for <18 and >65) 
    4 - output
*/

//1
var km = parseInt( prompt("How many km do you have to do?") );

//Validation
if ( isNaN(km) ) {
    alert("Invalid format. The text must be a number. Please refresh page.");
}

document.getElementById("km").innerHTML = km + ("Km");

//console.log(km);

//2
var age = parseInt( prompt("What's your age?") );

//Validation
if ( isNaN(age) ) {
    alert("Invalid format. The text must be a number. Please refresh page.");
}

//console.log(age);

//3
var price = km * 0.21;
//console.log(price);

var discount;
if (age < 18) {
    discount = (price * 20) / 100;
    document.getElementById("discount").innerHTML = "20%";

} else if (age >= 65) {
    discount = (price * 40) / 100;
    document.getElementById("discount").innerHTML = "40%";
} else {
    discount = 0
    document.getElementById("discount").innerHTML = "0%";
}
//console.log(discount);

var finalPrice = (price - discount).toFixed(2);
//console.log(finalPrice);

//4

document.getElementById("finalprice").innerHTML = finalPrice + "€";