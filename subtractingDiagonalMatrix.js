const prompt = require("prompt-sync")();

function sumDiagonal(matrix) {
    let firstSum = 0, secondSum = 0;
    let one 
    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length - row - 1];
    }
    
    const result = firstSum - secondSum
    console.log("jumlah diagonal pertama = " + firstSum);
    console.log("jumlah diagonal kedua = " + secondSum);    
    console.log("maka hasil diagonal pertama - diagonal kedua adalah = " + result);
}

sumDiagonal([[1, 2, 0],[4, 5, 6],[7, 8, 9]]);


const rows = 3
const cols = 3
let inputMatrix = []

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        const userInput = prompt(`Enter element at position (${i + 1},${j + 1}):`);
        const element = parseInt(userInput);
        row.push(isNaN(element) ? userInput : element);
    }
    inputMatrix.push(row);
}
console.log(inputMatrix);
sumDiagonal(inputMatrix)
