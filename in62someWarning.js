// some warning using (this) keyword 
const person={
    fName:"lokendra",
    lName:"yadav",
    age:20,
    about: function(){
        console.log(`the person firstname is ${this.fName} and the Lastname ${this.lName}`);
    }
}
// person.about(); // here this is perfect for use this keyword in javascript 
const myFunc =person.about.bind(person); // it giving undefined but we have direct call to about but dont store another constant
myFunc();
// firstly we bind the object to the calling function than this keyword is valid 
