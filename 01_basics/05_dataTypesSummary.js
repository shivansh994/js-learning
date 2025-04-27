// Primitive

// 7 types : String, NUmber, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.29

const isLoggedIn = false;
const OutsideTemp = null;
let userEmail; 

const id = Symbol('123');
const anotherTemp = Symbol('123');

console.log(id === anotherTemp)

// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);