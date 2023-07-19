// rest parameter 
// function Summing(a,b,...c){
//      console.log(`a is ${a}`);
//      console.log(`b is ${b}`);
//      console.log(`c is `,c);
//      return a+b+c;
// }
// const ans=Summing(1,1,1,1,1,1,1);
// console.log(ans);


const Summing=(...numbers)=>{
    let total=0;
  for (let number of numbers){
      total=total+number;
  }
  return total;
}
const ans=Summing(1,2,3,4,5,10,50,25);
console.log(ans);