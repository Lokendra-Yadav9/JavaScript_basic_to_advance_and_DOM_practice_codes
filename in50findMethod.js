// find Method in javascripts 

// const arrays=["radhe","krishna","hari","prabhu","mukti"]
// const values=arrays.find((string)=> string.length===5)
// console.log(values);

// const arrays=["radhe","krishna","hari","prabhu","mukti"]
// const values=arrays.find((string)=>{
//      return string.length===5
//     })
// console.log(values);

const users=[
    {username:"loki",userID:1,area:"rural"},
    {username:"lokind",userID:3,area:"urban"},
    {username:"rachi",userID:4,area:"city"},
    {username:"rachin",userID:5,area:"city"},
    {username:"sachin",userID:6,area:"city"},
    {username:"prachi",userID:7,area:"city"},
    {username:"graachi",userID:8,area:"city"},
]
const finding=(string)=>{
         console.log(string.area==="city");      
}
const valuess=users.find(finding);
console.log(valuess);