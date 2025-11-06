//#1
console.log("#1");
let myArray = [5,6,7,8,2];

console.log(myArray[0]);

console.log(myArray[4]);
console.log(myArray[myArray.length-1]);

//pass 0 because its 0 index for first, 4 for last since it is 5 long and 0 indexed. can use myArray.length-1 as well if it is like 1,412,021 long array.
//#2
console.log("#2");
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//#3
console.log("#3");

myArray.push(5,4,2,3,1);
for(let i = 0; i < myArray.length; i++) {
    console.log(`myArray[${i}] is ` + myArray[i]);
}

//shows all values  5,6,7,8,2,5,4,3,2,1
//#4
console.log("#4");

let myString = "This is my String";

console.log(myString.length);
