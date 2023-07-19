//Write a JavaScript function that checks whether a passed string is a palindrome or not?

//(madam,nursesrun)= are palindrome
// for ,cat= are not 
function isPalindrome(str){
    for(i=0;i<str.length/2;i++){
        if (str[i]!==str[(str.length)-1-i]) {
            console.log(str[i]);
            console.log(str[((str.length)-1-i)])
            return false;
        }
        else
        {
            console.log("i have doubt");
        }
    }
    return true;
}
const str1="madam";
const str2="lokendr";
const str3="nursesrun";
console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
