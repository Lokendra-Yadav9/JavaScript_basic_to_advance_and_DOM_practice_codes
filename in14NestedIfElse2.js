// if 
// else if 
// else if 
// else if 
// else
// let tempInDegree;
let userInput=prompt("Enter the tempreture of ooutside");

if(userInput<0)
{
    console.log("its extremely cold outside ");
}
else if(userInput<15)
{
    console.log("cold outside ");
}
else if(userInput<25)
{
    console.log("weather is okay outside ");
}
else if(userInput<35)
{
    console.log("lets go for play");
}
else if(userInput<45)
{
     console.log("turn on AC");
}
else{
    console.log("too Hot!!");
}