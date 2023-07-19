// spread operator
// const array1=["key1","key2","key3","key4"];
// const array2=["key5","key6","key7","key8"];

// console.log(array1 ,...array2);

// spread operator
// console.log(..."abcdefghijklmnopqrstuvwxyz");

// spread operator in object 
// const obj1=["a1","a2","a3","a4"];
// const obj2=["b1","b2","b3","b4"];

// console.log(obj1,...obj2,"c1","c2","c3");

const obj1={
    key1:"a1",
    key2:"a2",
    key3:"a3"
};
const obj2={
    key4:"b1",
    key5:"b5",
    key6:"b6"
};
// const newobj={  ...obj1,  ...obj2};
const newobj={..."abcdfefgd"}
console.log(newobj);