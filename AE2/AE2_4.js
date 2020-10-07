function findGreaterThan(values,x){

    if(Math.min.apply(Math, values)>x){
        return true;
    }else{
        return false;
    }
}

let values = [22,43,7,8,10,14,16];

console.log(findGreaterThan(values,5));