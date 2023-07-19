// new keyword in javascript 
// new keyword
function CreateUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

CreateUser.prototype.about=function(a,b){
    console.log(a.firstName,b.age);
}
const newUser1=new CreateUser();

// new keyword 
//1.) create empty object this={}
//2.) return this

console.log(newUser1);
