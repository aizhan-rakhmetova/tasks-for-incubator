// Simple Pig Latin
function pigIt(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0];
        result += word.slice(1) + firstLetter + "ay ";
    }
    return result.trim();
}

console.log(pigIt("Pig latin is cool")); // "igPay atinlay siay oolcay"
