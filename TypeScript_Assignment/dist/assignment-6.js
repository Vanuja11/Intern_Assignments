"use strict";
class Addition {
    calculate(a, b) {
        return a + b;
    }
}
class Subtraction {
    calculate(a, b) {
        return a - b;
    }
}
class Multiplication {
    calculate(a, b) {
        return a * b;
    }
}
class Division {
    calculate(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        else {
            return a / b;
        }
    }
}
const addition = new Addition();
console.log(addition.calculate(10, 20));
const subtraction = new Subtraction();
console.log(subtraction.calculate(25, 5));
const multiplication = new Multiplication();
console.log(multiplication.calculate(5, 5));
const division = new Division();
console.log(division.calculate(100, 20));
const divideByZero = new Division();
try {
    console.log(divideByZero.calculate(100, 0));
}
catch (error) {
    console.log(error.message);
}
