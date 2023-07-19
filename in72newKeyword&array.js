// new keyword and array in javascript
// let numbers=[1,6,8,2,4];
// console.log(Object.getPrototypeOf(numbers));
// // we know that prototype=== in only function has
// // but array has predefined prototype 
// console.log(Array.prototype);
// console.log(numbers); 

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype=[];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);
hello();
