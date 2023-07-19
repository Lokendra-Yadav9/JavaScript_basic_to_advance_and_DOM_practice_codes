// Object Destructuring 
const person={
    name:"lokendra yadav",
    dob :"09/06/20002",
    age: 22,
    mother:"kalpana"
}

let { name:loki , age:pandra, ...rest} =person;
// console.log(loki ,pandra);
// console.log(rest);
// console.log(person.slice(2))
// console.log(age); 