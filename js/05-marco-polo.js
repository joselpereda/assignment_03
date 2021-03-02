// Define global variables
let currentNumber = 1;
let numIterations = 100;

do {
    // First check if number is multipe of 3 and 5
    // If true, write "Marco! Polo!" to the console
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
        document.write("Marco! Polo!<br>");
    
    // Then check if it is a multiple of 3
    // If true, write "Marco!" to the the console
    } else if (currentNumber % 3 === 0) {
        document.write("Marco!<br>");
    
    // Last if it is a multiple of 5
    // If true, write "Polo!" to the console
    } else if (currentNumber % 5 === 0) {
        document.write("Polo!<br>");
    
    // Otherwise simply write the number to the console
    } else {
        document.write(currentNumber + "<br>");
    }

    // Increment current number by 1
    currentNumber++;

// Continue looping until currentNumber reaches 100, then exit
} while (currentNumber <= numIterations);