interface Animal {
    name: string;
    age: number;
}

interface Fish {
    name: string;
    age: number;
    waterType: 'freshwater' | 'saltwater';
}

function printPet(pet: Animal | Fish): void {
    console.log(`Name: ${pet.name}`)
    console.log(`Age: ${pet.age}`)
}