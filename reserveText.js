const prompt = require("prompt-sync")();

function test() {
    let t = "NEGIE1"
    let arr1 = []

    const splitArray = t.split("")
    const lastLetter = splitArray[splitArray.length - 1]
    arr1.push(lastLetter)

    const splitArray2 = t.split("", t.length - 1)
    const res = splitArray2.reverse().join("");

    console.log(res+arr1.join("")); 
}
test()


function input() {
    const text = prompt("input text: ")
    let array1 = []

    const split = text.split("")
    const last = split[split.length - 1]
    array1.push(last)

    const split2 = text.split("", text.length - 1)
    const result = split2.reverse().join("");

    console.log(result+array1.join("")); 
}
input()

