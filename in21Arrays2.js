let num=[1,2,3,4,9];
console.log(num);

// ADD OR REMOVE FROM LAST(push and pop)
// push ---> add last in array
// num.push(5,5,6,3,8);
// console.log(num);

//pop ---> remove last value of array
// let poppedFruits=num.pop(4);
// console.log(num);
// console.log("popped fruits is ", poppedFruits);

// ADD OR REMOVE FROM STARTING (shift and unshift)

//unshift
num.unshift(0,4,5);
console.log(num);

// shift
let removednum=num.shift();
console.log(num);
console.log("removed num is ",removednum)