// Default parameter in js

// function sumTwo(a,b)
// {
//     if(b="undefined")
//     {
//         b=0;
//     }
//     return a+b;
// }
// const res=sumTwo(45); // if we not pass b= parameter
// console.log(res);
let func1=(a,b=0)=>{
    return a*b;
}
const res=func1(45);
console.log(res);
