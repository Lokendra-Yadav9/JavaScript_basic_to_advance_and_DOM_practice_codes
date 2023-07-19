// getter and setter in js
class person{
    constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}


// *************************** getter ************************
get fullName(){   // after using get "console.log(person1.fullName);"  we can use fullName as a key and access 
        return`${this.firstName} ${this.lastName}`;
     }


// *************************** setter ************************
set fullName(fullName){
    const [firstName,lastName]=fullName.split(" ");
    this.firstName=firstName;
    this.lastName=lastName;
}
}
const person1=new person("lokendra","yadav",22);

person1.fullName="lokindra yadu"; // 
// console.log(person1.firstName);
// console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1);



