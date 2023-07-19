// create the __ proto__ in object 
const person={
    key1:"value1",
    key2:"value 2",
}
const person2=Object.create(person); // new way to create the empty object 
person2.key3="value3";  // add key value pair in empty object
person2.key4="value4";   //add key value pair in empty object
console.log(person2); // print the key4 by accessing the person 
console.log(person2.__proto__);//  it will show the proto which is store in person2 
