// nested destructuring 
const users=[
    {userName:"lokendra",userId:1,age:12,lastName:"yadav"},
    {userName:"loki",userId:2,age:52,lastName:"khangar"},
    {userName:"lokindra",userId:3,age:22,lastName:"agrawal"},
    {userName:"lokivvndra",userId:4,age:28,lastName:"agawal"}
]

// const [user1, user2, user3]=users;
// console.log(user1,user2,user3);

const [{lastName}, ,{age},{userId:urgeUser}]=users;
console.log(lastName);
console.log(age);
console.log(urgeUser);

// const [{userId}, ,{lastName}]=users; 9310932008