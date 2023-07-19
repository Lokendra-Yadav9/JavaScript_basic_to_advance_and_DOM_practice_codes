// array in objects 
const users=[
    {userId:1, firstName:"lokendra", lastName:"yadav", age:52},
    {userId:2, firstName:"mahendra", lastName:"sutra", age:452},
    {userId:3, firstName:"aayush", lastName:"tiwari", age:122}
]

// for of for print these data
for(let user of users){
    console.log(user);
    console.log(user.userId);
}
