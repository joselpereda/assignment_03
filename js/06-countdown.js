// Prompt for starting number of countdown
let countDownStart = Number(prompt("What number should I start the countdown from?"));

do {
    // Write current number to the console
    console.log(countDownStart);
    
    // Decrease number by 1
    countDownStart--;

// Continue looping while current number is >= 0
} while (countDownStart >= 0);