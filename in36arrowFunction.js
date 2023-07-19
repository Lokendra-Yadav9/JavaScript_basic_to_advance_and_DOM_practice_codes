// // arrow function in js 
// // const func1=function sumTwo()
// // {
// //     return 55+45;
// // }
// // lets changes upper function into arrow function
// const func1 = () => {
//     // return 55+25;
//     console.log("arrow function ready ")
// }
// func1();
// // console.log(func1());

// const func2= (a,b,c) => {
//    return a+b+c;
// }
// // func2(15,52,45);
// console.log(func2(15,52,45));

// function example :- isEven
// input anynumber (1,2,3,4)
// output = true(even), false(odd)
let inputNumber;
 const func3= isEvenNum = (inputNumber)=>{

    if(inputNumber%2===0)
    {
       return console.log("input number is even ");
    }

   return console.log("input number is odd");
    // else
    // {
    //     console.log("input number is odd");
    // }
}

 let result=func3(15);
//  console.log(result);