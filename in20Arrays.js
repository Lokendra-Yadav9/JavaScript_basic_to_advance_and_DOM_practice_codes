// intro to arrays
// reference type
// how to create arrays

//ordered collection of items
// let fruits=["loki","govi","aloo"];
// let numbers=[1,2,3,4,5,6,7,8,9];
// let mixed=[1,2,"string",null,undefined];
// console.log(numbers);
// console.log(mixed);
// console.log(fruits);

let arr=[];
let num=10;
for(i=0;i<num;i++){
      arr[i]=i*7+7;
}
for(i=0;i<num;i++){
    console.log(arr[i]);
}
console.log(Array.isArray(arr));

let fruits=["apple","mango","grapes"];
let obj={};// object literal
// console.log(fruits);
// fruits[1]="banana";
// console.log(fruits);

console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(obj));