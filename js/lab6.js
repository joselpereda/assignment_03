let investment;
let rate;
let years;

// Funtion to check that investment amount entered is in the correct format
function isFloat(invest) {
    let floatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    if (!floatRegex.test(invest)) {
        return false;
    }
    invest = parseFloat(invest);
    if (isNaN(invest)) {
        return false;
    }
    return true;
}
//----------------------------------------------------------------------------------------
// function to check that years entered is a a whole integer
function isInt(investYears) {
    let intRegex = /^-?\d+$/;
    if (!intRegex.test(investYears))
        return false;

    let intVal = parseInt(investYears, 10);
    return parseFloat(investYears) == intVal && !isNaN(intVal);
}
//----------------------------------------------------------------------------------------
// Prompt user to enter investment amount in xyz.xx format, of at least $1
investment = window.prompt("Enter investmnt amount as xxxx.xx and is at least $1");

// Verify investment amount is in correct format, and that it is >= $1
if ((isFloat(investment) === false) || (parseInt(investment) < 1)) {
    do {
        investment = window.prompt("Enter investmnt amount in the correct format, xxxx.xx, which must be at leat $1");       
    } while ((isFloat(investment) === false) || (parseInt(investment) < 1));
}
// Round investment amount to 2 decimals 
investment = Math.round(parseFloat(investment * 100)) / 100;

//----------------------------------------------------------------------------------------
// Prompt user to enter interest rate in xyz.x format and is between 0% and 6%
rate = window.prompt("Enter the interest rate as xxxx.x");

// Verify that interest rate is in correct format and that it is between 1% and 6%
if ((isFloat(rate) === false) || (parseInt(rate) < 1 || parseInt(rate) > 6)) {
    do {
        rate = window.prompt("Enter investmnt amount in the correct format, xxxx.x, which must be between 1% and 6%");       
    } while ((isFloat(rate) === false) || (parseInt(rate) < 1 || parseInt(rate) > 6));
}
// Round interest rate to one decimal place
rate = Math.round(parseFloat(rate * 10)) / 10;

//----------------------------------------------------------------------------------------
// Prompt user to enter number of investment years
years = window.prompt("Enter number of years for investment.");

// Check if years entered is a whole integer. If not, prompt user to re-enter value
while (isInt(years) === false) {
    years = window.prompt("Enter number of years as a whole number.");
}
years = parseInt(years,10);

// Vefity that number of years entered is between 1 an 30. If not, prompt user to enter a valid entry
while ((years >= 1 && years <= 30) !== true) {
    years = window.prompt("Entry not valid. Number of years must be between 1 and 30.");
}

//----------------------------------------------------------------------------------------
// Write to console the investment amount, the interest rate and number of investment years
document.write(`Investment amount: ${investment} <br>`);
document.write(`Interest rate: ${rate} <br>`);
document.write(`Investment years: ${years} <br>`);
