// object Reference type
// arrays are good but not sufficient
// for real world data 
// objects store key value Pairs
// objects dont have index

// how to create objects
const key="email";
const person={
    name:"lokendra singh",
    "person age":22,  // use here bracket beacause of space 
    Hobbies:["cricket","study","loving","comedy"]
}
console.log(person);// print the object
// console.log(typeof person); // type of person 

// how to access data from the arrays 
// console.log(person.age);
// console.log(person.name)

// how to add a pair of data in object 
// difference between dot and bracket notaion
// person.sex="male"; // dot use for no space in between  

person[key]="lokendrasinghy111@gmail.com";
console.log(person);



