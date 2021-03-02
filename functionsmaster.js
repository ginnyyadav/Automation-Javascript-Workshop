// functions a block of code that we can run over and over again

// function declaration
function helloWorld() {
  //code goes here
  console.log('hello');
}

//let's call the function, we can call this as mnay times as we want
helloWorld();

// function expression
const goodbyeWorld = function(){
  console.log('buh-bye');
};

goodbyeWorld();

// what's the difference? Hoisting -> function declarations 
// not function expressions so we can call function before definition
// example call helloWorld() before def vs call speak() before def 
// expresions are good to use to make sure you are being organized

// arguments and parameters
// adding flexibilty and avoiding hardcoding

// age parameter
const yourAge = function(age){
  console.log('your age is ' + age);
};

// argument
yourAge('16');

//template strings

const saySomethingElse = function(age){
  console.log(`My age is: ${age}`);
};

saySomethingElse('16');

//multiple values
// order is important! 

const yourBloodGlucose = function(bg, units) {
  console.log(`your blood glucose is ${bg} ${units}`);
};

yourBloodGlucose('110', 'mg/dL');

// if i call this without parameters it will show as undefined

yourBloodGlucose();

// we can do default values

const yourBloodGlucoseAgain = function(bg = '112', units = 'mg/dL') {
  console.log(`your blood glucose is ${bg} ${units}`);
};

yourBloodGlucoseAgain();
yourBloodGlucoseAgain('165');
yourBloodGlucoseAgain('200', 'mmol');

//returning values next week