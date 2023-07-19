// factory functions & discuss some memory related problems

// const person=
// {
//         //   const user={}
//           firstName:"lokendra",
//           lastName:"yadav",
//           emails:"lokendrasinghy111@gmail.com",
//           age:45,
//           mobileNumber:7471172041,
//           about :function(){
//                 return (`name of the person ${this.firstName} and age of person ${this.age}`)
//           },
//           is18:function(){
//             return age>=18;
//           }
// }

// console.log( person.firstName);
// console.log( person.lastName);



// 1. make a function (that defined the objects )
// 2. add key value pair
// 3. object return krega 
function person(firstName,lastName,emails,age,mobileNumber)
{
          const user={}
          user.firstName=firstName,
          user.lastName=lastName,
          user.emails=emails,
          user.age=age,
          user.mobileNumber=mobileNumber
          user.about=function(){
                return (`name of the person ${this.firstName} and age of person ${this.age}`)
          }
          user.is18=function(){
            return age>=18;
          }
          return user;
}
const user1=person("lokendra","yadav","lokendra.com",5,7471172041);
const user2=person("loki","yadav","loki.com",47,7771172041);
console.log(user1);
const infoUser1=user1.about();
console.log(infoUser1);
const InfoAge=user1.is18();
console.log(InfoAge);
