// callback function 
function func2(name){
    console.log("hy i am func2 function ");
    console.log(`hy your name is ${name}`);
}
function func1(callback){
    console.log("hy i am func1 function");
    // console.log(func2);
    callback("lokendra singh");
}
func1(func2);