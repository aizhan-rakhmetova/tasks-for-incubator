// Checking if the given number is a perfect square

function isSquare(n) {
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }
    return false;
}
