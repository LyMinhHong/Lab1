// Importing React library
import React from "react";

// Importing ReactDOM library to render React components to the DOM
import ReactDOM from "react-dom";

// Importing the App component from the specified path
import App from "/src/App";

// Rendering the App component inside the HTML element with id "root"
ReactDOM.render(<App />, document.getElementById("root"));

// Attempting to use root.render for rendering the App component within React.StrictMode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
