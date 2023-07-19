// new keyword 2nd exampke 
function person(firstName,lastName,emails,age,mobileNumber)
{
     // by use of this method we can create the __proto__
          this.firstName=firstName;
          this.lastName=lastName;
          this.emails=emails;
          this.age=age;
          this.mobileNumber=mobileNumber;
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
const user1=new person("lokendra","yadav","lokendra.com",20 ,7471172041);
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.singing());

for(let key in user1){
    if(user1.hasOwnProperty(key)){ // print only user1 own keys not any other refrence key or not any function
    console.log(key);
    }
}