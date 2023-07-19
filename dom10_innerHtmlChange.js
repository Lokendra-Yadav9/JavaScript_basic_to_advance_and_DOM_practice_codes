// inner html can aceess 
const todo=document.querySelector(".todo-lists");
// console.log(todo.innerHTML);
// todo.innerHTML=;
todo.innerHTML+="<li>changed todo-1</li>";
todo.innerHTML+="<li>new changed todo added again</li>" // never use these trick beacause of performance issue 
console.log(todo.innerHTML);
// use this whenever you change the value of innerhtml