// using  call , apply and bind for call the function and method 
// call 
// const person={
//     fName:"lokendra ",
//     lName:"yadav",
//     age:20,
//     about: function(company ,trip){
//         console.log(`firstname is ${this.fName} and the lastName is ${this.lName} and the company is ${company} and  trip is ${trip}`);
//     }
// }
// const person2={
//     fName:"loki",
//     lName:"singh",
//     age:20,
//     // about: function(company ,trip){
//     //     console.log(`firstname is ${this.fName} and the lastName is ${this.lName} `);
//     // }
// }
// person.about("google","london"); 
// person.about.call(person2,"microsoft","america"); // using call function we can access another object keys and value by other object

// apply 
function about (company ,trip){
    console.log(`firstname is ${this.fName} and the lastName is ${this.lName} and the company is ${company} and  trip is ${trip}`);
} 
const person={
    fName:"lokendra ",
    lName:"yadav",
    age:20,
}
const person2={
    fName:"loki",
    lName:"singh",
    age:20,

}

about.apply(person2,["sbi","indore","mumbai"]);

//bind
// function about (company ,trip){
//     console.log(`firstname is ${this.fName} and the lastName is ${this.lName} and the company is ${company} and  trip is ${trip}`);
// } 
// const person={
//     fName:"lokendra ",
//     lName:"yadav",
//     age:20,
// }
// const person2={
//     fName:"loki",
//     lName:"singh",
//     age:20,

// }

// const learn=about.bind(person2,"sbi","indore");
// learn();
// console.log(learn);
