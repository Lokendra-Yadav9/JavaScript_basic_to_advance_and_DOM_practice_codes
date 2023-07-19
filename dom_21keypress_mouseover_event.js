// keypress event 
// mouseover event

//***********************keypress ******* */
// let body=document.body;
// body.addEventListener("keypress",(e)=>{
//        console.log(e.key);
// })

//***********************mouseover***************** */

// let mainButton=document.querySelector("#btn1");
// console.log(mainButton);
// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouse is over a button");
// })
let mainButton=document.querySelector(".my-button button");
console.log(mainButton);
mainButton.addEventListener("mouseleave",()=>{
    console.log("mouse is leave a button");
})
