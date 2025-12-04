// Counting the frequency of each word in a string using a hashmap and print it

let str = "apple Kiwi banana apple Guava banana apple Guava Kiwi";
let arr = str.split(" ");
arr.sort();

let count = 1;
for(let i=0;i<arr.length - 1;i++) {
    if(arr[i] === arr[i + 1]) {
        count++;
    }
    else {
        console.log(arr[i] + ": " + count);
        count = 1;
    }
}
console.log(arr[arr.length - 1] + ": " + count);