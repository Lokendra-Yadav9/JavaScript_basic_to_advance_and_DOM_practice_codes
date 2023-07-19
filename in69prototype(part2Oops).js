// prototype use in practical level 
// const userMethod={
//     about:function(){
//         return (`name of the person ${this.firstName} and age of person ${this.age}`)
//   },
//     is18:function(){
//     return this.age>=18;
//   },
//   singing:function(){
//     return `i am singing the song`

//   }
// }

function person(firstName,lastName,emails,age,mobileNumber)
{
          const user=Object.create(person.prototype);  // by use of this method we can create the __proto__
        //   const user={}
          user.firstName=firstName;
          user.lastName=lastName;
          user.emails=emails;
          user.age=age;
          user.mobileNumber=mobileNumber;
          
          // user.about=userMethod.about;
          // user.is18=userMethod.is18;
          return user;
}
// console.log(person.prototype);
person.prototype.about=function(){
            return (`name of the person ${this.firstName} and age of person ${this.age} and ${this.mobileNumber}`)
      };
person.prototype.is18=function(){
        return this.age>=18;
      };
person.prototype.singing=function(){
        return `i am singing the song`;
      };
const user1=person("lokendra","yadav","lokendra.com",20 ,7471172041);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.singing());