let userArray = [];
let arrayLength;
let sum = 0;
function getArray() {
    arrayLength = prompt("How many numbers do you want to enter in your array?");
    for (i = 0; i < arrayLength; i++) {
        userArray[i] = parseInt(prompt("Enter integer: "));
        sum = sum + userArray[i];
    }
    document.getElementById("sum").innerHTML += "The sum is " + sum;
    document.getElementById("mean").innerHTML += "The mean is " + sum/arrayLength;
}

