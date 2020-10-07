let users = ["Dani", "Alejandro", "Adrian", "Noelia", "Carla"];

let blackListed = ["Alejandro", "Noelia"];

let arrayNoBaneados = users.map(function(task) {   
    for (var i = 0; i < users.length; i++) {
        for (var j = 0; j < blackListed.length; j++) {
            if (users[i] == blackListed[j] && i != j) { 
                users.splice(i,1);
             }
         }
     }
     return users;
    });

console.log(users);