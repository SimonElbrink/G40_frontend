
let names = ["Simon", "Mehrdad", "Ulf", "Åsa","Kent"]

console.log(names);
console.log(names[2]); // Ulf

names.reverse();
console.log(`Array in Reverse= ${names}`);

names.push("Marcus");
console.log(`Array with Marcus added to the end ${names}`);

names.sort();
console.log(`Sorted Array= ${names}`);

names.pop();
console.log(`Removing "Åsa from Array = ${names}`);

// splice takes two arguments
// first param = defines the position
// second param = define how many elements should be removed

console.log(`Remove two elements (${names.splice(2,2)}) result= ${names} is still saved`);


 // Join Method joins all elements into a string
 // Parameter is the seperator
let str = names.join(":");
console.log(str);

// Create a function that takes a name as a parameter 
// and removes it from the Array if it exists.

// function deleteName (name){
//     const index = names.findIndex(n => n === name);
//     console.log(`${name} found at index: ${index}`); // -1 = not found
//     if(index !== -1){
//         names.splice(index,1);
//         return true;
//     }else{
//         return false;
//     }
// }

const deleteName = (name) => {

    const index = names.findIndex(n => n === name);
    console.log(`${name} found at index: ${index}`); // -1 = not found
    if(index !== -1){
        names.splice(index,1);
        return true;
    }else{
        return false;
    }
}

const nameToRemove = "ASFD"
const wasRemoved = deleteName(nameToRemove);
console.log(`${nameToRemove} has been removed: ${wasRemoved}`);