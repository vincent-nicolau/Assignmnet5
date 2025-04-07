console.log("File begin");

// Global variables
let name = "John";
let age = 25;
let city = "New York";

// Fill in the blanks function
function fillInTheBlanks() {
    return `Hello, my name is ${name}. I am ${age} years old and I live in ${city}.`;
}

// How old are you function
function howOldAreYou(birthYear) {
    const currentYear = new Date().getFullYear();
    return `You are ${currentYear - birthYear} years old.`;
}

// Change globals function to Toddify things
function toddifyGlobals() {
    name = "Todd";
    age = 30;
    city = "Toddville";
    console.log("Globals have been Toddified!");
}

// Example usage
console.log(fillInTheBlanks());
console.log(howOldAreYou(1995));
toddifyGlobals();
console.log(fillInTheBlanks());

console.log("File end");