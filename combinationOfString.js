function combination(str){
    let list_of_string=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            list_of_string.push(str.slice(i,j));
        }
    }return list_of_string;
}
console.log(combination("lokendra"));