//document.getElementById("demo").innerHTML = "Hello Group 40!";

var a = 10;
var b  = 5.50;
var c = a + b;

console.log('value of ' + a + '+' + b + '=' + c);

// ``Backticks can make string message easier
console.log(`Value of ${a} + ${b} = ${c}`)

var firstName = "Simon";
var sentence = 'hello world';

var lastName = null;
var isValid = true;

console.log(lastName);
console.log(isValid);


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

simon["city"] = "Växjö"; // added a property


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



// String

let fn ='Simon';

console.log("Starts with F: " + fn.startsWith('F'));

console.log(fn.length)
console.log(fn.endsWith('n'))



const years = [1990, 1997, 2000, 1960, 1200];

//ES5
var ages = years.map(function(year){
    return 2022 - year;
})

//ES6
ages = years.map(year => 2022 - year);

console.log(ages);


var a1 = 5; // value assigning
var b1 = "5";

console.log(a1 == b1);// Value check
console.log(a1 === b1); // Value and Type check


console.log("end of lecture!");

