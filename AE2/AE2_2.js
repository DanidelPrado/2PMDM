function average(dataArray){
    if(dataArray.length){
        let num = 0;
        return dataArray.reduce((num, num2)=>num2 + num, 0)/ dataArray.length;
    }else{
        return undefined;
    }
}

let dataArray = [2,4,6,8,10,11,13];

console.log(average(dataArray));