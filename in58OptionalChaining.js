// optional chaining   ?.
const person={
    firstName:"lokendra yadav",
    age:45,
    // address:{houseNumber:4425}
}

console.log(person.firstName);
console.log(person?.age);
console.log(person?.address?.houseNumber); // we found undefined when wanished the key from object=>undefined

