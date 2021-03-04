// Define global variables
let currentNumber = 0;
let numIterations = 15;

do {
    // Determine if number is odd or even using modulus operator (%). If it = 0, number is even, otherwise it is odd
    if (currentNumber % 2 === 0) {
        //document.write(`"${currentNumber} is even"<br>`);
        console.log(`"${currentNumber} is even"`);
    } else {
        //document.write(`"${currentNumber} is odd"<br>`);
        console.log(`"${currentNumber} is odd"`);
    }

    // Increment current number by 1
    currentNumber++;

// Continue looping until currentNumber reaches 15, then exit
} while (currentNumber <= numIterations);