const prompt = require("prompt-sync")();

function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
}
  
function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
}

const result = longestWord("Saya sangat senang mengerjakan soal algoritma")
console.log(result + ": " + result.length + " character");

const input = prompt("Input text: ")
const result2 = longestWord(input)
console.log(result2 + ": " + result2.length + " character");

