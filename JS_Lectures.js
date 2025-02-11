//functions

//function declaration
function print_Name(name){
    console.log(name);
}

//Arrow function (ES6)
const printName = (name) => {
    console.log(name);
}

//Spread operator and shallow copies
const numbers = [1,2,3,4,5];
console.log(...numbers);

//=> spread operator is used to copy the elements of an array or object into another array or object

const list = ["pizza", "burger", "fries"];
const newList = [...list, "icecream", "cake"];
console.log(newList);

// */shallow copie 
const random = [['cat', 'dog'], 1, 2, 3];
const newRandom = [...random];

random[2] = 4;
console.log(newRandom);
console.log(random);

random[0][0] = 'fish';
console.log(newRandom);
console.log(random);
// => shallow copy is a copy of the object but not the object itself. So, if we change the original object, the shallow copy will also change.


//Destructuring
//array destructuring
const hideOuts = ['cave', 'treehouse', 'underwater'];
let [hideOut1, hideOut2, hideOut3] = hideOuts;
console.log(hideOut1, hideOut2, hideOut3);

//object destructuring
const person = {
    firstName: 'John',
    age: 25,
    location: 'New York'
}

let {firstName, age : myAge, location} = person;
console.log(firstName);
console.log(myAge);

//Anonymous functions and callback functions
e => console.log('anonymous function');
// => anonymous functions are functions that do not have a name. They are usually used as arguments to other functions.
//Callback functions : functions that are passed as arguments to other functions.
//Anonymous functions are usually  callbacks .

const people = [{name: 'John', age: 25, money : 100}, {name: 'Jane', age: 30, money : 300}, {name: 'Jack', age: 20, money : 5550}];

//array.map()
//=> map is used to create a new array by applying a function to every element in an array.
//=> every one gets 20 more dollars
const add20 = (person) => {
    person.money += 20;
    return person
}

// then we can use the map function to apply the add20 function to every person in the people array.
const newPeople = people.map(add20);
console.log(newPeople);

const morePeople = people.map((person) => { 
    person.money += 200
    return person
});
console.log(morePeople);

//array.filter()
//=> filter is used to create a new array with elements that pass a certain condition.
let richPeople = people.filter((person) => { 
    return person.money > 1000
});

console.log(richPeople);










