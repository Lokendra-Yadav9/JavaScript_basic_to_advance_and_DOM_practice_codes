// function into function 
const newFunc=()=>{
     sumTwo=(num1,num2)=>{
          return num1+num2;
    }

    mulTwo=(num1,num2)=>{
        return num1*num2;
    }
    printName=()=>{
        console.log("lokendra yadav");
    }
    console.log(sumTwo(4,6)); 
    console.log(mulTwo(4,6)); 
    printName();
    console.log("writing functions into function");
}

newFunc();
console.log(sumTwo(5,6));
console.log(mulTwo(5,6));