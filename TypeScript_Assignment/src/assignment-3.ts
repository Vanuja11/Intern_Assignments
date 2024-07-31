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

    if ('waterType' in pet) {
        console.log(`Water Type: ${pet.waterType}`)
    }
    console.log()
}

const dog: Animal = {
    name: 'Buddy',
    age: 5
}

const shark: Fish = {
    name: 'Fishy',
    age: 2,
    waterType: 'saltwater'
}

printPet(dog)
printPet(shark)
