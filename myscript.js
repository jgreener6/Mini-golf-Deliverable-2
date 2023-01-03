let name = prompt("Welcome to GC mini golf! What is your name?");
        console.log (name)
let miniGolf = prompt("Hi, " + name +" ! Would you like to play 3 or 6 holes today?");
        console.log (miniGolf)
let total = 0;
  for (let i = 1; i <= miniGolf; i++) {
        var par = Number ((prompt("How many putts for hole "+ i +"? (par is 3)")) -3);
        console.log (par)
        total += par;

  }

 
if ( total === 0){
    console.log ("Good game, "+ name +". Your total par was: "+ total +" ")
    
} 

if (total > 0){
    console.log ("Nice try, "+ name +"... Your total par was: "+ total +" ")
    
}

if (total < 0){
    console.log ("Great job, "+ name +"! Your total par was: "+ total +" ")

} 

