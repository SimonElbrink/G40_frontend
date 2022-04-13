// Mini project
// Create a CRUD of Person Objects

const personList = [];

const savePerson =(person) =>{
    let id = Math.floor(Math.random() * 100000);
    person.id = id;
    personList.push(person);
}

const printPersonList = () =>{
    personList.forEach(person => console.log(person));
}

const findPersonByName = (name) => {
    const result = personList.filter(personObj => personObj.firstName === name);
    return result;
}

const updatePerson = (person) => {
//find person to update, using the id's
const foundIndex = personList.findIndex( p => p.id === person.id);
console.log("index to update: " + foundIndex);

//replace existing object
personList[foundIndex] = person;

}

const removePersonFromList = (person) => {
    const foundIndex = personList.findIndex( p => p === person);
    personList.splice(foundIndex,1);
}



const person1 = {
    id: "0",
    firstName: "Simon",
    lastName: "Elbrink",
    email: "simon@lexicon.se"
}

savePerson(person1);



const person2 = {
    id: "0",
    firstName: "Mehrdad",
    lastName: "Javan",
    email: "Mehrdad@lexicon.se"
}

savePerson(person2);

//printPersonList();

const foundPerson = findPersonByName("Mehrdad");
console.log(foundPerson);


const person1Update = {
    id: person1.id,
    firstName: "ABC",
    lastName: "Elbrink",
    email: "ABC@lexicon.se"
}

updatePerson(person1Update);

printPersonList();