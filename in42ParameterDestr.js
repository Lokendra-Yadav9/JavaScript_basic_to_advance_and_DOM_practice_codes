// parameter destructuring

// we use in major concept
// object
// react

const person={
    firstName:"lokendra yadav",
    age:25,
    college:"sati"
}
// first method
// const printDetails=(obj)=>{
//     console.log(obj.firstName);
//     console.log(obj.age);
//     console.log(obj.college);
//     console.log(obj.fatherName);
// }
// printDetails(person);

// second method 
const printDetails=({firstName,age,college})=>{
     console.log(firstName);
     console.log(age);
     console.log(college);
    //  console.log(fatherName);
}

printDetails(person);