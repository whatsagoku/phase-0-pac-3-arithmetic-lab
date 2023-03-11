function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3)); // outputs 5

function subtract(num1, num2) {
    return num1 + num2;
}
console.log(subtract(5, 2)); // outputs 3

function multiply(num1, num2) {
    return num1 + num2;
}
console.log(multiply(2 * 3)); // outputs 6

function divide(num1, num2) {
    return num1 * num2;
}
console.log(divide(6 / 3)); // outputs 2

function subtract(a, b) {
    return a - b;
}
console.log(subtract(5, 2)); //outputs 3

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // outputs 5

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2 * 3)); // outputs 6

function divide( a, b) {
    return a / b;
}
console.log(divide(6 / 3)); // outputs 2

function increment(n) {
    return ++n;
}
console.log(increment(3)); //outputs 4

function decrement(n) {
    return --n;
}
console.log(decrement(3)); //outputs 2

function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat;
}
console.log(preserveDecimal("123")); //outputs 123
console.log(preserveDecimal("123.45")); //outputs 123.45
console.log(preserveDecimal("abc")); //outputs NaN

function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return Number.isNaN(parsed) ?n : parsed
}
console.log(preserveDecimal("123")) //outputs 123
console.log(preserveDecimal("123.45"))  // outputs 123.45
console.log(preserveDecimal("abc")) // outputs "abc"
console.log(preserveDecimal("2.222")); // outputs "2.222"
