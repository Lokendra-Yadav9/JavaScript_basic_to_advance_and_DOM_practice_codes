// Every method in javascript 

// every method run in full array 
// const numbers=[1,2,3,5,4,8,8,9,6];
// const ans=numbers.every((number)=>number<10);
// console.log(ans);

const users=[
    {username:"loki",userID:1,area:"city"},
    {username:"lokind",userID:3,area:"city"},
    {username:"rachi",userID:4,area:"city"},
    {username:"rachin",userID:5,area:"city"},
    {username:"sachin",userID:6,area:"city"},
    {username:"prachi",userID:7,area:"city"},
    {username:"graachi",userID:8,area:"city"},
]
const ans=users.every((cityName)=>cityName.area==="city");
console.log(ans);
