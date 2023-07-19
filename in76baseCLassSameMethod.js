// same method in baseclass/ childclass
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

// ******************************* super keyword *********************//
class dog extends animal{
    constructor(name,age,speed){
           super(name,age);
           this.speed=speed;
}
eat(){
    return` ${this.Name} is eating food (modified baseclass eat function)`// first eat will run from this class dog then 
    // it forword parents class if they not found function
}
run(){
    return `${this.Name} is running at ${this.speed}kmph`
}
}
const dog1= new dog("doggy",1,45);
// console.log(dog1);
console.log(dog1.eat());
console.log(dog1.run());

// console.log(dog1.speed);
// console.log(dog1.eat());
// console.log(dog1.isCute());