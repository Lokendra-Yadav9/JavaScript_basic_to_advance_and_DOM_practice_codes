// Nested if else 

// winning number is 20
// 20 your guess is right
// 17 too low 
// 22 too high

let winningNum =19;
let userGuess=+prompt("Guess a number");
if(userGuess==19){
    console.log("your guess is right");
}
else {
    if(userGuess>19){
    console.log(+userGuess+ " you are too high ");
    }
    else
    {
     console.log(+userGuess+ " you are too low");
    }
}
console.log( typeof userGuess, userGuess);