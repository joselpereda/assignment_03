// Declare global variables
let coinFlip;

// Prompt user how many times to execute loop
let  cycleTimes = Number(prompt("How many times do you want to play flip the coin?"));

for (i = 0 ; i < cycleTimes; i++ ) {
    // Determine the result of the coin toss
    coinFlip = Math.round(Math.random());

    // If coin toss = 0, write "Heads" to the console
    if (coinFlip === 0) {
        console.log("Heads");

    // If coin toss = 1, write "Tails" to the console 
    // Convert variable coinFlip to integer in order to compare to 1   
    } else if (parseInt(coinFlip) === 1)  {
        console.log("Tails");
    }
}

