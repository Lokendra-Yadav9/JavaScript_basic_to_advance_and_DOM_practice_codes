// map in javascript
// map is an iterables 

// it store the key value in pair (like objects)

// map is oderable always (order guaranteed )

// duplicate keys are not allow in map like (objects)

// diffrence b/w map and objects

// object use string and symbol as key

// map use string , symbol and number as key 

// object literal
// keys-> symbol and String (object)
// keys-> symbol , number , string (map)

// const details={
//     firstName:"lokendra yadav",
//     age:45,
//     11:"eleven",
//     lastName:"lucky yadav"
// }
// console.log(details.firstName);
// console.log(details["firstName"]);
// console.log(typeof(firstName));
// console.log(typeof(details));
// for(let user in details){
//     console.log(user);
//     console.log(typeof(user));
    // console.log(user.firstName);
    // console.log(user.lastName);
    // console.log(user.age);
// }
// const person=new Map();
// person.set('firstName','lokendra');
// person.set('age',40);
// person.set(1,"one");
// person.set([1,4,6],'oneTwothree');
// person.set({1:'one'},'oneTwoThree')

// console.log(person.keys());  // map iteraters
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.get(1));

// for(let key of person.keys()){ // can use for of loop but in object we use for in loop 
//     console.log(key,typeof key);
// }

// for(let [key,value] of person){
//     console.log(key, value);
// }
const person1={
    id:1,
    firstName:"lokendra"
}

const person2={
    id:2,
    firstName:"loki",
}
const person= new Map([['firstName','lokendraa'],['age',45]])
// console.log(person);

const userInfo=new Map();
userInfo.set(person1,{age:8,gender:"male"});
userInfo.set(person2,{age:58,gender:"female"});
userInfo.set(person,{id:1})
// console.log(userInfo);
// console.log(person1.id);
// console.log(person2.id);
console.log(person.get("firstName"));
// console.log(userInfo.get(person1).age);
// console.log(userInfo.get(person2).age);
// console.log(userInfo.get(person1).gender);
