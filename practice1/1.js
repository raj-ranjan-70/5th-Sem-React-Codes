// get the squares of even numbers only

let arr = [15, 11, 4, 6, 9, 2];

let newarr = arr.map((num) => {
    if(num % 2 === 0) {
        return num * num;
    }
});
console.log("Old Array: " + arr);
console.log("New Array: " + newarr);