//Javascript data types

let number1 = 1;
let anotherNumber = 4.5;

let string = 'I am a string'

let boolean = true;

//null vs undefined 
let nullType = null;
let noDefinition;

console.log(nullType);
console.log(undef);

// JavaScript objects are containers for named values called properties or methods.
// pull up postman

let carObject = {exterior: 'white', interior: 'leather', wheels: '16spoke'};
console.log(carObject.exterior);

// An array is a special variable, which can hold more than one value at a time.
// pull up postman dsa login
let carArray = ['volvo', 2019, 'white'];
console.log(carArray[0]);

//dynamic types
let number2 = 2;
console.log(number2);
number2 = "2";
console.log(number2);
number2 = [2];
console.log(number2);

// boy those strings and numbers look the same don't they, why is it important to know the difference...addition vs.concatenation?
console.log(2+2);
console.log("2"+"2");
console.log(2+2-2);
console.log("hey"+"beautiful");

// what is happening?? type coercion, simply put if your doing some operation, like arithmetic, with incompatible datatypes the operator will make the conversion for you

console.log("2" + 2);
// lets see if you can figure this out...concatenation and type coercion!!
// "2" + "2" concatenates to "22"
// "22"-"2" type coercion to int 
console.log("2"+"2"-"2");
//so what should i do if I don't have the right type?
let numberString = "3";
console.log(numberString + numberString);
console.log(Number(numberString)+ Number(numberString));



// How do I figure out the type of a variable?

let number3 = 1;

console.log(typeof(number3));

