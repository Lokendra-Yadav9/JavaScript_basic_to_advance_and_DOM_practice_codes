// array iterates 

const person={
       name:"lokendra yadav",
       age:22,
       status:"single",
       foods:["loki","aloo","banana","karvooj"]
}

// two types 
// for in loop 
// object.keys method

// for in loop 
// for(let keys in person)
// {
//     // console.log(keys, " : " ,person[keys]);
//     // console.log(`${keys} : ${person[keys]}`);
// }

// Object.keys method
// console.log(Object.keys(person));

// for of loop
for(let keys of Object.keys(person) ){
    console.log(keys," : ", person[keys]);
}