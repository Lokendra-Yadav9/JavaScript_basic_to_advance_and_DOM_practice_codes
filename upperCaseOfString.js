// change in upper case of an any string first letter 
function uppercase(str){
      array1=str.split(" ")
      newArray=[];
      for(let i=0;i<array1.length;i++){
        newArray.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));

      }return newArray.join(" ");
}
console.log(uppercase("my name is lokendra singh yadyvanshi"));