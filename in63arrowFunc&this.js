// arrow function never support the 
myFunc=()=>{
    console.log(this.fName,this.age)
}
const person={
        fName:"lokendra ",
        lName:"yadav",
        age:20,
        about:myFunc,
    }
person.about.call(person);

// conclusion is that this keyword never work on arrow function 