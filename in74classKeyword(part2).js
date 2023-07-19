// exmaple-2 
// make a class named (animal) and property will be name and age of animal 
// class has method which name is eat
class animal{
    constructor(Name,age){
    this.Name=Name;
    this.age=age;
    }
    eat(){
        return `animal type is ${this.Name} and age is ${this.age}`
    }
    isCute(){
        return this.age<=1;
    }
} 

// ******************************* inheritance *********************//

// we use extends keyword to make many classes same properties of animal class without write all properties
// const animal1= new animal("doggy",24);
// console.log(animal1);
// console.log(animal1.eat());
class dog extends animal{

}
const dog1= new dog("doggy",1);
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isCute());