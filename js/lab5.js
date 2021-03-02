// Prompt user for Y, y, N or n response
do {
    // If renponse is not valid, continue prompting
    again = window.prompt("repeat entries? (y or n)" ,"y");
} while (!((again === "y") || (again === "Y") || (again === "N") || (again === "n")));

document.write(`Response was ${again}`);