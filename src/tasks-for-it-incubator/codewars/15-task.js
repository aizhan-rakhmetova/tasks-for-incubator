//Invert values

function invert(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(-array[i]);
    }
    return result;
}