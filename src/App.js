// Importing React and Component from the 'react' library
// import React, { Component } from "react";

// Importing the CSS file for styling
import '/src/App.css';

// Defining a React component using class syntax
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>My React App!</h1>
//             </div>
//         );
//     }
// }

// Exporting the App component
// export default App;

// Importing React from the 'react' library
import React from 'react';

// Defining a functional component named HelloWorld
function HelloWorld() {
    return (
        <div>
            <h1>Lý Minh Hồng - CE171170 - SE1717</h1>
        </div>
    );
}

// Exporting the HelloWorld component as the default export
export default HelloWorld;

// Defining a class named Person
class Person {
    constructor(name, age) {
        // Setting up properties for the class
        this.name = name;
        this.age = age;
    }

    // Defining a method to greet
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
const person = new Person("Hong", 21);

// Calling the sayHello method on the instance
person.sayHello();
