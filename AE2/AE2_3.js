function findMinimum(values){
    if(values.length){
        
        return values.reduce(() => Math.min.apply(Math, values));
    }
}

let values = [22,43,7,8,10,14,16];

console.log(findMinimum(values));