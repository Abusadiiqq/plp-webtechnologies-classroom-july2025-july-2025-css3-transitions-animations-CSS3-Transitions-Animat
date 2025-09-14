// Function to add a class to an element
function addAnimationClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add(className);
        return true; // Return value indicating success
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
        return false; // Return value indicating failure
    }
}

// Function to remove a class from an element
function removeAnimationClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove(className);
        return true; // Return value indicating success
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
        return false; // Return value indicating failure
    }
}

// Function to toggle a class on an element (combined example showing flexibility)
function toggleAnimationClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
        return element.classList.contains(className); // Return true if the class is now present, false otherwise
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
        return null; // Return null if element is not found.  Important to indicate failure
    }
}


// Immediately Invoked Function Expression (IIFE) to create a scope
(function() {
    // Add event listener to the button
    const startAnimationButton = document.getElementById("start-animation-button");

    startAnimationButton.addEventListener("click", function() {
        // Trigger the animation on the js-animated-box
        let animationStarted = toggleAnimationClass("js-animated-box", "js-animated");

        if (animationStarted) {
            console.log("Animation started or resumed!");
        } else {
            console.log("Animation stopped or paused!");
        }

    });

    // Example of using the functions
    // initial state can be set.  Important for more complex animations
    removeAnimationClass("js-animated-box", "js-animated");

})();
