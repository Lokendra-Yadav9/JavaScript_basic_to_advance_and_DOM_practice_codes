// hoisting with function javascript 
// func1(); // with use const it shows error 
let func1= () => // const-error, var
{
    console.log("hello world");
}
func1(); // after function declaration , call function 