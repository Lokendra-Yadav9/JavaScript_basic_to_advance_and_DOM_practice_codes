// primitive vs reference data types
//primitive datatypes
let num1=16;
let num2=num1;
console.log("value is num1 is",num1);
console.log("value of num2 is", num2);
num1++;              // increment in num1
console.log("after increment is num1");
console.log(" the value of num1 is ",num1);
console.log(" the value of num2 is ",num2);

//reference datatypes
let array1=[1,2,3,4,5];
let array2= array1;
console.log(array1);
console.log(array2);
array1.push(6); // after push the values in array1
console.log(array1);
console.log(array2);
