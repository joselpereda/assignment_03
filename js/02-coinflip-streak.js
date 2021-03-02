// Declare global variables
let coinFlip;

do {
    // Determine the result of the coin toss
    coinFlip = Math.round(Math.random());

    // If coin toss = 0, write "Heads" to the console
    if (coinFlip === 0) {
        document.write("Heads<br>");

    // If coin toss = 1, write "Tails" to the console    
    } else if (coinFlip === 1)  {
        document.write("Tails<br>");
    }
 
// check if coin toss = heads. If yes, exit the loop.    
} while (coinFlip !== 1);