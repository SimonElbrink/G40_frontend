//document.getElementById("demo").innerHTML = "Hello Group 40!";

// Data Types
// Numbers, String, Boolean, Objects
var a = 10;
var b  = 5.50;
var c = a + b;
var d = '10';

var firstName = "Simon";
var sentence = 'hello world';

var lastName = null;
var isValid = true;


//String Concating
console.log('value of ' + a + '+' + b + '=' + c);

//Template Literals can make string messages easier
console.log(`Value of ${a} + ${b} = ${c}`)  // NOTE! - Backticks  ``

console.log(lastName);
console.log(isValid);

console.log(a == d);// Value check
console.log(a === d); // Value and Type check


// JavaScript Object
var simon = 
    {
     id: 1,
     firstName: "Simon", 
     lastName:"Elbrink"
    };

var mehrdad = {
    id: 2,
    firstName: "Mehrdad",
    lastName: "Javan",
    title: "Teacher"
};

mehrdad.title = "Teacher, Developer" // Updating a property
delete mehrdad.id; // Delete a Propererty

simon["city"] = "Växjö"; // added a property ES3-5
simon.title = "Teacher"; // added property ES6


console.log(simon);
console.log(mehrdad)

// JS Scope

function display(msg){
    console.log("message: " + msg);
    console.log(firstName); // Global variable
}

display("Hello");
//console.log(msg); Not allowed. message is in side a function


// function OCACertificateTester(passedTest){

//     if(passedTest == true){
//         let firstName = "simon";
//         const birthYear = 1997;

//         console.log(`${firstName} born at year ${birthYear} Did NOT pass the test`);
//     }

// }


// OCACertificateTesterES5(true);



// String Method
let fn ='Simon';

console.log("Starts with F: " + fn.startsWith('F'));
console.log(fn.endsWith('n'))


console.log(fn.length)


//Arrow functions

const years = [1990, 1997, 2000, 1960, 1200];

//ES5
var ages = years.map(function(year){
    return 2022 - year;
})

//ES6
ages = years.map(year => 2022 - year);

console.log(ages);


console.log("end of lecture!");