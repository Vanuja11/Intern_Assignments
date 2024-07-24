"use strict";
let names = ["Mario", "Luigi", "Peach"];
let ages = [25, 28, 24];
names.push("bowser");
ages.push(35);
let fruits = ["apples", "pears", "bananas", "magos"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
// object literals
let user = {
    firstName: 'mario',
    age: 30,
    id: 1,
};
user.firstName = 'peach';
user.id = 2;
// type inference with object literals
let person = {
    name: 'luigi',
    score: 35,
};
person.name = 'bowser';
person.score = 40;
// console.log("--FUNCTIONS--")
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
const num = addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);
// console.log(num)
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    // console.log(total)
}
addAllNumbers([1, 2, 3, 4]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting(`mario`, `hello`);
//any type 
let age;
age = 30;
age = false;
