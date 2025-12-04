// unique elemens in an array

let str = "apple Kiwi banana apple Guava banana apple Guava Kiwi";
let arr = str.split(" ");

let s = new Set(arr);
console.log(s);