// rules for naming variables

//1. you cannot start with Number
//example
// 1value(invalid);
//value1(valid);
var value1=100;
console.log(value1);
//want some arthimetic calculation with variables
console.log(value1 ** 0.5); 
console.log(value1 ** 2);

// 2.you can use underscore(_) and doller Symbol
// var first_value(valid); //snake case writing 
// var _firstvalue(valid);   
// var first$name(valid);
// var $firstvalue(valid);

// 3. you can not use spaces in between variables
// var first name(invalid)

// 4. convention 
// start with small letter and use camelcase 
 let firstName="luccky singh";// camel case writing
 console.log(firstName); 

 //5. use let instead of var 
  firstName="mommy";
 console.log(firstName);