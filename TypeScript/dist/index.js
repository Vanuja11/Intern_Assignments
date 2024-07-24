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
let title;
age = 30;
age = false;
title = {
    hello: 'world'
};
// any type in arrays
let things2 = ['hello', true, 30, null];
things2.push({ id: 123 });
// functions & any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resutlTwo = addTogether(3);
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'my first post',
    body: 'something intersting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//  with arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
// console.log(colorOne, colorTwo)
// union types
let someid;
someid = 1;
someid = '2';
let email = null;
// type guard
