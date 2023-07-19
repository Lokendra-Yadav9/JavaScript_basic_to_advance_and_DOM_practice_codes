// block scope and function scope 

// let and const are block scope
// var is function scope

// ---------------- use let -------------------
// const func1=()=>{
//        let task1="value1";
//        console.log("the value of task1 is ",task1);
//        function func2(){
//         let task2="value2";
//         console.log("the value of task2 is ",task2);
//        }
//     //    console.log(task2);
//     console.log(task1);
//     //    func2();
// }
// func1();
// console.log(task1); // task1 is not accessable outsid of the function beacause it is block scope
// func2();

//------------------ use const ------------
// function func1(){
//     const task1="value1";
//     console.log(task1);
//     const func2=()=>{
//         const  task2="value2";
//         console.log(task2);
//         console.log(task1);
//     }
//     func2();
//     console.log(task2); // task2 can not access bcz it is block scope { -- }
// }
// func1();

//--------------------- use var -----------------
// console.log(task2);
function func1(){
    var task1="value1";
    console.log(task1);
    const func2=()=>{
        var task2="value2";
        console.log(task2);
        console.log(task1);
    }

    func2();
    // console.log(task2);

}
func1();

