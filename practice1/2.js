// Find the largest number in an array using .reduce
let numbers = [12, 48, 56, 84, 11, 40];
let largestNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);
console.log("Largest Number: " + largestNumber);    