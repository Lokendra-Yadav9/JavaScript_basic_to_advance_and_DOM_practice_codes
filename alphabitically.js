//  Write a JavaScript function that returns a string that has letters in alphabetical order.
function alpha(str){
    const letterOnly=str.replace(/[^a-zA-Z]/g, '');
    const sorted=str.split("").sort().join("");
    return sorted;
}
const str="lokendra";
const ans=alpha(str);
console.log(ans);