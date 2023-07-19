// function returning function in js
function show(){
    return function shows(){
    return ("it is show function");
    }
    // return shows();
}
const ans= show();
// ans();
console.log(ans());