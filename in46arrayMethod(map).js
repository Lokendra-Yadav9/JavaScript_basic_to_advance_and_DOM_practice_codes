// array method in javascript (map method)

// const array1=[7,8,9,6,2,3,6,1,4];
// function multiply(number){
//     return number*8;
// }
// const newArray=array1.map(multiply);
// console.log(newArray);

// const newArray=array1.map((number,index)=>
// {
//   return number*2;
// });
// const newArray=array1.map
// console.log(newArray);

const person=[
    {firstName:"lokendra",age:14,lastName:"yadav"},
    {firstName:"chinku",age:52,lastName:"yadav"},
    {firstName:"chotu",age:16,lastName:"radhe radhe"}
]
const show=person.map((user)=>{
      return (user.lastName);
});
// const show=person.map(function(user){
//      return (user.firstName);
// });

console.log(show);