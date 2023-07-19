// get and set attributes
const link =document.querySelector("a"); // it is for select all a tag from html and store in link
console.log(link.getAttribute("href"));  // by using getAttribute print href from a or link 
link.setAttribute("href","https://google.com");   // it is for change or set another value of href using setAttribute
console.log(link.getAttribute("href")); // now get the set value by using getAttribute method 


// const inputElement=document.querySelector(".form-group input"); // select input tag which in a from-group class 
// console.log(inputElement.getAttribute("placeholder"));  get the placeholder value by using getAttribute method 