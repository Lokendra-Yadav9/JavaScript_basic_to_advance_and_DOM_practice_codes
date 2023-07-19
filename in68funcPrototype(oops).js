// create prototype by function 
// function is function as well it work as a object 
function func1(){
         console.log("hello lokendra");

}
// const func1={
//     key2:"value2",
//     key3:"value3",
// }
console.log(func1.prototype); 
// prototype is noting but a free space object which is present in function 
// work as a object like
func1.prototype.key1="value1"; // it can store the key value pair
func1.prototype.kek2=[4,5,6,8,5]; // it can store arrays
func1.prototype.sum=function(){ // it can store function
    return `adding two value `;
}

// ************ know that prototype present or not **********
// prototype is exist only in function 
if(func1.prototype){
    console.log("prototype is present");
}
else
{
    console.log("prototype is not present");
}