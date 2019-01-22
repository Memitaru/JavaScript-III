/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When this is used in the global scope then 'this' will be the window.
* 2. Implicit binding - When calling a function inside of an object 'this' will become the name of the object.
* 3. New Binding - When using new to create an object with a constructor function 'this' will be the new object that is created.
* 4. Explicit binding - If you are using 'this' but use .call or .apply then 'this' will change from default to the object you've specified. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function thisWindow(){
    console.log(this);
}
thisWindow();

// Principle 2

const myObj = {
    name: "Runty",
    age: "9",
    tail: "short",
    testFunction: function(type){
        console.log(`My name is ${this.name} and I am a ${this.age} year old ${type}.`)
    }
}

myObj.testFunction("cat");

// Principle 3

function Cats(name){
    this.name = name,
    this.speak = function(){
        console.log(`My name is ${this.name}`);
    }
}

const mowm = new Cats("Mowm");
mowm.speak();

// Principle 4

// code example for Explicit Binding

const jazzy = new Cats("Jazzy");

jazzy.speak.call(mowm);