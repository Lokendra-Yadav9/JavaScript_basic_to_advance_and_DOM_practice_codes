// class keyword in javascript 
// class is a keyword 
// class ,ake easy to code but it is fake
class person{
    constructor(firstName,lastName,emails,age,mobileNumber){
    console.log("constructor is called")
    this.firstName=firstName;
    this.lastName=lastName;
    this.emails=emails;
    this.age=age;
    this.mobileNumber=mobileNumber;
}
    about(){
        return (`name of the person ${this.firstName} and age of person ${this.age} and ${this.mobileNumber}`);
    }
    is18(){
        return this.age>=18;
    }
    singing(){
        return `i am singing the song`;
    }
}



// function person(firstName,lastName,emails,age,mobileNumber)
// {
//           const user=Object.create(person.prototype);  // by use of this method we can create the __proto__
//           user.firstName=firstName;
//           user.lastName=lastName;
//           user.emails=emails;
//           user.age=age;
//           user.mobileNumber=mobileNumber;
//           return user;
// }
// // console.log(person.prototype);
// person.prototype.about=function(){
//             return (`name of the person ${this.firstName} and age of person ${this.age} and ${this.mobileNumber}`)
//       };
// person.prototype.is18=function(){
//         return this.age>=18;
//       };
// person.prototype.singing=function(){
//         return `i am singing the song`;
//       };
const user1=new person("lokendra","yadav","lokendra.com",20 ,7471172041);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.singing());