var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

console.log(color1)
console.log(color2)

function setBackground (){
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value 
    +"," 
    + color2.value + ")"

    css.textContent = body.style.background + ';'
}

color1.addEventListener("input", setBackground)

color2.addEventListener("input", setBackground)