// method 
// method is a the inside function of object 
// const person ={
//     firstName:"lokendra",
//     age:15,
//     lastName:"yadav",
//     about : function(){
//         // console.log("the person name is lokendra yadav and age is 15");
//     }
// }
// person.about(); 
// const person2 ={
//     firstName:"lucky",
//     age:15,
//     lastName:"singh",
//     about : function(){
//         console.log(`the person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
const person4 ={
    firstName:"luviii",
    age:145,
    lastName:"sagh",
    about : preview
}
person4.about();

function preview(){
    console.log(`the person name is ${this.firstName} and age is ${this.age} person's lastname is ${this.lastName}`);
}
const person3 ={
    firstName:"lucky",
    age:15,
    lastName:"singh",
    about :preview
}
person3.about(); 

