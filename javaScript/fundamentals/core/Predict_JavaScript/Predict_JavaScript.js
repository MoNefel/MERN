//Problem: 1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output => destructuring for arrays
// Testla
// Mercedes
console.log(randomCar)
console.log(otherRandomCar)

//Problem: 2.
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output => destructuring for objects
// Elon for otherName
// employeeName gives an error
console.log(otherName);
//console.log(employeeName);

//Problem: 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// 12345 for password
// undefined for hashedPassword because password is not a key in person object
console.log(password);
console.log(hashedPassword);

//Problem: 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// 2 for first because we are skipping the first element with the coma
// 5 for second beacuse we are skipping 3 elements with the comas
// 2 for third because we are skipping 8 elements with the comas
console.log(first === second); // false 
console.log(first === third); // true

//Problem: 5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// value for key
// [1, 5, 1, 8, 3, 3] for secondKey
// 1 for secondKey[0]
// 5 for willThisWork because we are skipping the first element with the coma
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Problem: 6.
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// The code contains 3 scopes:
//1. Global Scope:
// Contains the [beatles] array and the "printNames" function.

// Variables declared here are accessible throughout the entire code.

//2. Function Scope of printNames:
// Created when "printNames" is called.
// Contains the names parameter and the "actuallyPrintingNames" function.
// Variables declared here are accessible only within printNames.

//3. Function Scope of actuallyPrintingNames:
// Created when "actuallyPrintingNames" is called.
// Contains the "index" and "name" variables declared with var.
// Variables declared here are accessible only within "actuallyPrintingNames".

// The code will output:
// When printNames(beatles) is called, the following will happen:
// The "actuallyPrintingNames" function will execute.
// The for loop will iterate over the names array (which is [beatles]).
// For each iteration, it will log the "name" and its corresponding "index".
// After the loop, it will log the final values of "name" and "index".
// The final values of "name" and "index" will be the last values they had in the loop.
// ==>
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

//Problem: 7.
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
// The code will output: 
//ReferenceError: name is not defined
// This happens because name and index are only defined inside the for loop block and are not accessible outside of it.

//Problem: 8.
const beatles = ['Paul', 'George', 'John', 'Ringo']; // Global scope
function printNames(names) { // Function scope
  function actuallyPrintingNames() { // Nested function scope
    for (let index = 0; index < names.length; index++) { // Block scope
      const name = names[index]; // Block scope
      console.log(name + ' was found at index ' + index); // Inside the block
    }
  }
  actuallyPrintingNames(); // Invoke the nested function
}
printNames(beatles); // Call the function with the `beatles` array.
// the output will be:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//Problem: 9.
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// The code will output:
//1. true because the first element of the composition array in the planet object is "gas" and the first element of the composition array in the planetCopy object is also "gas".
//2. false because the planet and planetCopy objects are two separate objects in memory, even though they have the same properties and values.
