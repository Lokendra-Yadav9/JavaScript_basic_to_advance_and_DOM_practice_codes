//**************************** loops by using documents object0 */

// types of loop 
// 1. simple for loop
// 2. for of loop
// 3. forEach   // here we can not use forEach method to iterate through HTMLCollection

// simple for loop ------->
// let items=document.getElementsByTagName("a");
// for(i=0;i<items.length;i++){
//       const item=items[i];
//       item.style.backgroundColor="#fff";
//       item.style.color="green";
//       item.style.fontWeight="bold"
// }

// for of loop
// for(let item of items)
// {
//       item.style.backgroundColor="#fff";
//       item.style.color="red";
//       item.style.fontWeight="bold";
// }

// change item in Array
// const itemss=Array.from(items);
// console.log(Array.isArray(itemss));
let items=document.querySelectorAll("a");
console.log(items);
