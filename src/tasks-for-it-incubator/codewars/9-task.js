//Add Length
function addLength(str) {
    let words = str.split(" ");
    let arr = [];
    for (let word of words) {
        arr.push(word + " " + word.length);
    }
    return arr;
}