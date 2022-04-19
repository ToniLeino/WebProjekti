//random generaattori
let min = 1;
let max = 25;

let int1 = Math.floor(Math.random() * (max - min + 1)) + min;

let int2 = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("questionYksi").innerHTML = int1 + " " + "+" + " " + int2 + " = ";


