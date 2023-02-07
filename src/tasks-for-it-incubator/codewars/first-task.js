// Checking if the given number is a perfect square
//task for algorithms

function isSquareFunction(n) {
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }
    return false;
}
