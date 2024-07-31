interface User {
    name: string;
    age: number;
    email: string;
}

function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

const exampleUser: User = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

console.log(exampleUser);