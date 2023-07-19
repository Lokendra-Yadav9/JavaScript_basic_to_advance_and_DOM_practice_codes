// in person function two method about and is18 is continue occupying memory after  every object created
// we sovlve this problem 

const userMethod={
    about:function(){
        return (`name of the person ${this.firstName} and age of person ${this.age}`)
  },
    is18:function(){
    return this.age>=18;
  },
  singing:function(){
    return `i am singing the song`

  }
}

function person(firstName,lastName,emails,age,mobileNumber)
{
          const user=Object.create(userMethod);  // by use of this method we can create the __proto__
          user.firstName=firstName;
          user.lastName=lastName;
          user.emails=emails;
          user.age=age;
          user.mobileNumber=mobileNumber;
          // user.about=userMethod.about;
          // user.is18=userMethod.is18;
          return user;
}
const user1=person("lokendra","yadav","lokendra.com",5,7471172041);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());

// const user2=person("loki","yadav","loki.com",47,7771172041);
// console.log(user2.about());
// console.log(user2.is18());

// const user3=person("lokindra","yaduavnshi","lokindra.com",7,7871172041);
// console.log(user3.about());
// console.log(user3.is18());