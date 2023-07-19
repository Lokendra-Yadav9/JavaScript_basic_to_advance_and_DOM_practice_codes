// some method in javascript

// const Id=[45,45,666,995,656,666,656,45,55,45];
// const ans=Id.every((numberId)=>numberId>=45);
// console.log(ans);

const product=[
    {userId:1,product:"fridge",rate:10000},
    {userId:3,product:"cooler",rate:12000},
    {userId:2,product:"washing machine",rate:7000},
]
const ans=product.some((productRate)=>productRate.rate>10000)
console.log(ans);