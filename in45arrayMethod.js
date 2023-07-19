// different typr of array method 

// forEach method from array

// const newArray=[10,15,25,36,56,65,653,55,62,656,68,52,96];
// function myFunc(index,number){
//     console.log(`the index is ${index} and the number is ${number}`);
// }

// for(let i=0;i<newArray.length;i++){
//    myFunc(i,newArray[i]);
// }

// multyple by 2
// const newArray=[10,15,25,36,56,65,653,55,62,656,68,52,96];
// function myFunc(index,number){
//     console.log(`the index is ${index} and the number after multiply by 2 is ${number*2}`);
// }
// for(let i=0;i<newArray.length;i++){
//    myFunc(i,newArray[i]);
// }

// const newArray=[10,15,25,36,56,65,653,55,62,656,68,52,96];
// function myFunc(number,index){
//     console.log(`the index is ${number} and the number is ${index}`);
// }
// newArray.forEach(myFunc);
// const newArray=[10,15,25,36,56,65,653,55,62,656,68,52,96];
// function myFunc(number,index){
//     console.log(`the index is ${number} and the number is ${index}`);
// }
// newArray.forEach(myFunc=(number,index)=>{
//     console.log(`the index is ${index} and the number is ${number*2}`);
// });

const person=[
    {firstName:"lokendra",age:14,lastName:"yadav"},
    {firstName:"chinku",age:52,lastName:"yadav"},
    {firstName:"chotu",age:16,lastName:"radhe radhe"}
]
// person.forEach(function(user){
//         console.log(user.firstName);
// })

person.forEach(function(user,index){
       console.log(`the user name is ${user.firstName} and ${index}`);
})
      