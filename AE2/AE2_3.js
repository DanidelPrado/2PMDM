function findMinimum(values){

        return Math.min.apply(Math, values);
}

let values = [22,43,7,8,10,14,16];

console.log(findMinimum(values));