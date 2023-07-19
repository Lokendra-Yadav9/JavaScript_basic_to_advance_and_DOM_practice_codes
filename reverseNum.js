// console.log("Write a JavaScript function that reverses a number.Sample Data and  output:Example x = 32243; Expected Output: 34223");

// // first solution -1
// function reverse_number(num){
//     num=num+""; // this for make num string 
//     return num.split("").reverse().join("");
//  // reverse()=> is used for reverse a string 
// //  join() => is used for join a string 
// }
// console.log(reverse_number(1548));

// // second solution -2
function reverse_number(num){
    let reversed_num=0;
    while(num !=0){
    reversed_num=reversed_num*10+num%10;
    num=Math.floor(num/10);
    }
    return reversed_num;
}
const num=123;
console.log("original number:"+num);
const result=reverse_number(num);
console.log("reversed number:" +result);