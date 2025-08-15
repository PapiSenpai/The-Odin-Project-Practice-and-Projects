/*
This is practice for object creation

Syntax
    - 

*/


// how to make an object
const obj = {
     name: 'Juan',
     age: "24",
     func() {
        console.log("Hello World");
     },
     year: 1925,
};
// accessing items in obj
obj.func();

// how to access objects as object properties
const obj2 = {
    names: {
        first: "Bob",
        second: "Bill",
    },
};
// Accessing items in object within object
console.log(obj2.names.second); //[i] will not work
console.log(obj2.names);
// settin up object members (updating object with new items of changes)
obj2.eyes = "Hazel";
obj2.snake = function () {
    console.log("Theres a snake in my boot");
};

console.log(obj2.eyes);
obj2.snake();

// How to use .this
// this is used to refer to the current object the code
// is executed. the obj that the method was called on
// Important when working with constructors that build more than one object
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

person2.introduceSelf();

// Intro to Constructors
/*
Constructors start with a capital letter and are named for the type of object
they create
*/

function People(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
};
// To call a constructor, we use new
const sal = new People("Sal");
sal.introduceSelf();


// Difference between using a primitave and an object
function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const obj4 = { counter: 0 };
let primitive = 0;

increaseCounterObject(obj4);
increaseCounterPrimitive(primitive);
console.log(obj4.counter);
console.log(primitive);

// Exercises

// map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item=> item.name); /* ... your code */

// console.log( names ); // John, Pete, Mary

// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(item=>({ // need to include '()' outside of the '{}' when working with objects
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id
// }));/* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

//sort users by age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr){
//     return arr.sort((a, b) => {a.age - b.age} // this will sort from highest number to lowest
// )};

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// Create Keyed Object From Array
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
};

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/