// Count the number of vowels in a given string.

let str = "My name is Raj Ranjan.";
let v = 'aeiouAEIOU';

let count = 0;
for(let c of str) {
    if(v.includes(c)) {
        count++;
    }
}

console.log(count);