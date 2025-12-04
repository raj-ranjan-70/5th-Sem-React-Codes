let arr = [12, 48, 56, 84, 11, 40];

let max = arr[0] > arr[1] ? arr[0] : arr[1];
let secmax = arr[0] > arr[1] ? arr[1] : arr[0];

for(let i = 2; i < arr.length; i++) {
    if(arr[i] > max) {
        secmax = max;
        max = arr[i];
    }
    else {
        if(arr[i] > secmax) {
            secmax = arr[i];
        }
    }
}

console.log(max);
console.log(secmax);