// Declare global variables
let coinFlip;

do {
    // Determine the result of the coin toss
    coinFlip = Math.round(Math.random());

    // If coin toss = 0, write "Heads" to the console
    if (coinFlip === 0) {
        console.log("Heads");

    // If coin toss = 1, write "Tails" to the console    
    } else if (parseInt(coinFlip) === 1)  {
        console.log("Tails");
    }
 
// check if coin toss = tails/1. If yes, exit the loop.    
} while (parseInt(coinFlip) !== 1);