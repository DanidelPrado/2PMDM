let values = [22,43,7,8,10,14,16];

let multipleFactorial = values.map(function(task) {   
        let y = 1;
        for ( let i = 1;  i <= task; i++) { 
            y = y * i;   
        } 
        return y; 
    });


console.log(multipleFactorial);