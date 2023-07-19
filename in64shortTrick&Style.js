// short techique for style and write the js method 
// const person={
//     fName:"loku",
//     lName:"yadav",
//     age:45,
//     about: function(){
//         console.log("hello world");
//     }
// }

//*************** we can write this method in another way like  */

const person={
    fName:"loku",
    lName:"yadav",
    age:45,
    about(){  // we can skip the function keyword and direct write the about 
        console.log("hello world");
    }
}
person.about();