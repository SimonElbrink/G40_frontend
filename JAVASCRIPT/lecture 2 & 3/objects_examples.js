//JS Object is an entry with state and behavior

// Anonymous Object
const calculator = {};

// An Object with collations of properties.
const myCalculator = {
    num1: 10,
    num2: 20,
    sum: function(){
        num1 = 100, num2 = 400;
        return this.num1 + this.num2;
    }
}

console.log(myCalculator);
console.log(myCalculator.sum());

const volvoCar = {name: "Volvo", model: "xc70", year: "2016"};

console.log(volvoCar);

console.log(volvoCar["model"])
console.log(volvoCar.model)


volvoCar["bar"] = "foo";
volvoCar.foo = "bar";

console.log(volvoCar);

delete volvoCar["bar"];
delete volvoCar.foo;

console.log(volvoCar);

//----------------------