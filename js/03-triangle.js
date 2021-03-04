// Declar global constant variables
const numOfIterations = 7;      // Number of lines/levels required to build the trianble 
const trianglePattern = '#';     // Character that will be used to shap the tianble pattern

for (i=1; i <= numOfIterations; i++) {
    console.log(trianglePattern.repeat(i));
}