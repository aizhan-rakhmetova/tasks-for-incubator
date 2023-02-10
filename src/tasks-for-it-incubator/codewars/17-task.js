//Crash Override

function aliasGen(f, s) {
//   var f = prompt("Enter your first name: ");
//   var s = prompt("Enter your last name: ");
    var firstInitial = f[0].toUpperCase();
    var lastInitial = s[0].toUpperCase();

    if (!/^[A-Z]/.test(firstInitial) || !/^[A-Z]/.test(lastInitial)) {
        return "Your name must start with a letter from A - Z.";
    }

    return firstName[firstInitial] + " " + surname[lastInitial];
}