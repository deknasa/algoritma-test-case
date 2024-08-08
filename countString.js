const prompt = require("prompt-sync")();

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

const appearances = (arr2, arr1) => arr2.reduce((ob, valArr2) => {
    ob[valArr2] = arr1.filter(v => valArr2 === v).length;
    return ob;
}, {});

const result = Object.keys(appearances(query, input)).map((key) => appearances(query, input)[key])
console.log(result);

let array1 = prompt("Enter a list of items of Array 1 separated by commas:");
let array2 = prompt("Enter a list of items of Array 2 separated by commas:");
let myArray1 = array1.split(",");
let myArray2 = array2.split(",");

console.log("Array 1 : ");
console.log(myArray1);
console.log("Array 2 : ");
console.log(myArray2);

const result2 = Object.keys(appearances(myArray2, myArray1)).map((key) => appearances(myArray2, myArray1)[key])
console.log(result2);




