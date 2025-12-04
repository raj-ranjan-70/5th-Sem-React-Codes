// Find the longest consecutive sequence of numbers in an unsorted array.

let arr = [100, 4, 200, 1, 3, 2];

arr.sort((a, b) => a - b);
let count = 0;
let lc = 1;
let idx = -1;
for(let i = 0;i < arr.length - 1;i++) {
    if(arr[i] + 1 === arr[i + 1]) {
        lc++;
    }
    else {
        if(count < lc) {
            count = lc;
            idx = i;
        }
        lc = 1;
    }
}
console.log(count);
for(let i=idx;i >= 0;i--) {
    console.log(arr[i]);
}