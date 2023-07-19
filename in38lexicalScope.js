// lexical scope
        const myVar21="krishna";
        const myVar="radhe";
function func1(){
        const myVar="radhe radhee";  // first function prefer inside var/const then search in lexical scope
        const myVar2="krishna-radhe";
          console.log("it is func1 inside =", myVar);
          const func2=()=>{
             console.log(myVar2);
             console.log(myVar21);// can access from outside 
          }
          func2();
}

func1();
// func2();
// console.log(myVar2); //this will choose the myvar2 from outside of the func1 