let valores = [
    "Ana",
    2,
    "Javi",
    5,
    "Roberto",
    7,
    "Vanessa",
    10
  ];
  
let numsPares = valores.filter(function(value){
    
    return value % 2 == 0;

}
)

console.log(numsPares);