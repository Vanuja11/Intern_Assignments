"use strict";
function printPet(pet) {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    if ('waterType' in pet) {
        console.log(`Water Type: ${pet.waterType}`);
    }
    console.log();
}
const dog = {
    name: 'Buddy',
    age: 5
};
const shark = {
    name: 'Fishy',
    age: 2,
    waterType: 'saltwater'
};
printPet(dog);
printPet(shark);
