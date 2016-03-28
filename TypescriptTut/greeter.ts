function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

interface Person {
    firstName: string;
    lastName: string;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);