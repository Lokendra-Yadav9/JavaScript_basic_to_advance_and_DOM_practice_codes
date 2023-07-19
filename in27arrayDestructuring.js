// array destructuring


let myArray=["task1","task2","task3","task4"];
// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log(myVar1);
// console.log(myVar2);
// let [myVar1, , ,myVar2]=myArray;  // to skip middle values 
let [myVar1,myVar2,...myNewVar]=myArray;
console.log("the value of myVar1 ",myVar1);
console.log("the value of myVar2 ",myVar2);
console.log("the new array values  ",myNewVar);