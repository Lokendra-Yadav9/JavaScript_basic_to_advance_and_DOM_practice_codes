// splice method in javascript
// for insert 
// const number=[1,2,6,6,51,6,1,5,1,54,21];
// const ans=number.splice(3,4);
// console.log(ans);
// console.log(number);

const tasks=["task1","task2","task3","task4","task5","task6","task7","task8"];
// const ans=tasks.splice(2,5,"tasksAdded","tasksAdded","tasksAdded","tasksAdded","tasksAdded","tasksAdded");
const ans=tasks.splice(3,1,"tasksAdded");
console.log(ans);
console.log(tasks);