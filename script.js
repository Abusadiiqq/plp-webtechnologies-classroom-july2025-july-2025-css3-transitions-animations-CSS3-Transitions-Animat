// Part 2: JavaScript Functions

// Function to generate a greeting message
function createGreeting(name) {
    let message = "Hello, " + name + "! Welcome to our interactive page."; // Local scope
    return message;
}

// Function to display the greeting message
function displayMessage(message, outputElementId) {
    let outputElement = document.getElementById(outputElementId);
    outputElement.textContent = message;
}

// Add event listener to the button
document.getElementById("function-button").addEventListener("click", function() {
    let userName = "User";  // You could prompt for user input here
    let greeting = createGreeting(userName);
    displayMessage(greeting, "message-output");
});

// Part 3: Combining CSS Animations with JavaScript

// Function to toggle the 'rotated' class on an element
function toggleRotation(elementId) {
    let element = document.getElementById(elementId);
    element.classList.toggle("rotated");
}

// Add event listener to trigger the rotation
document.getElementById("trigger-animation-button").addEventListener("click", function() {
    toggleRotation("target-element");
});


// Example of a function with global scope (generally avoid overuse)
let globalCounter = 0; // Global Scope
function incrementCounter() {
  globalCounter++;
  console.log("Counter:", globalCounter);
}

// Call the global counter from somewhere
document.addEventListener('DOMContentLoaded', function() { // Ensures DOM is loaded
  const element = document.getElementById("target-element");
  element.addEventListener('click', incrementCounter);
});

// Card flip (Alternative method without CSS hover)
/*
document.querySelector('.card-container').addEventListener('click', function() {
  document.querySelector('.card').classList.toggle('flipped');
});
*/
