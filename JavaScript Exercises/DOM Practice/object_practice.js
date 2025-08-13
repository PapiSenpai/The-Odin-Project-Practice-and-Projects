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

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);
