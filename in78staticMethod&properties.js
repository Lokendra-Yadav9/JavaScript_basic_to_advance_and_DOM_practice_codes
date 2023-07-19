// static method and properties
//static method can call by main class , not other object (person1)

class person{
    constructor(firstName,lastName,age){
             this.firstName=firstName;
             this.lastName=lastName;
             this.age=age;
    }
    get fullName(){   
        return`${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
    const [firstName,lastName]=fullName.split(" ");
    this.firstName=firstName;
    this.lastName=lastName;
    }
    static word="loving guy lokendra";
    static personInfo(){
        return`this is class call beacause of static `;
    }
    eat(){
        return `animal type is ${this.firstName} and age is ${this.age}`
    }
    isCute(){
        return this.age<=1;
    }
    run(){
        return `${this.Name} is running at ${this.speed}kmph`;
    }
}
const person1=new person("lokendra","yadav",22);
// console.log(person1.personInfo()); // cannot access beacause it is static method
console.log(person.personInfo());
console.log(person.word);
// console.log(person1.word);
