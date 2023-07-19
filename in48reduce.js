// reduce method in javascript
// const newArray=[1,2,3,4,5,6,7,8,9,10];
// const summingNumber=newArray.reduce((accumelator, currentValue)=>{
//        return accumelator+currentValue;
// });
// const res=summingNumber;
// console.log(res);

const person=[
    {userId:1,product:"fridge",rate:10000},
    {userId:3,product:"cooler",rate:12000},
    {userId:2,product:"washing machine",rate:7000},
]

const newArray=person.reduce((firstvalue,newVAlue)=>{
    return firstvalue+ newVAlue.rate;
},0);

const valueFinal=newArray;
console.log(valueFinal);
