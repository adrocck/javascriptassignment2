var three = 3;
var six = 6;
var nine = 9;

var addition = three + six;
var subtraction = six - three;
var multiplication = nine * three;
var division =  nine / three;

document.getElementById("addition").innerHTML = " If I have " + three + " kitty cats and " + six + " puppies, I have " + addition + " precious creatures.";
document.getElementById("addition").style.color= "red";
document.getElementById("addition").style.fontFamily= "Comic Sans MS";

document.getElementById("subtraction").innerHTML = "If I have " + six + " puppies and lose " + three + ", I have " + subtraction + " puppies, which is tragic and provides far too little love in my life.";
document.getElementById("subtraction").style.color= "orange";
document.getElementById("subtraction").style.fontFamily= "Comic Sans MS";

document.getElementById("multiplication").innerHTML = "If I have " + nine + " puppies and " + three + " kitty cats, I have " + multiplication + " animals to cuddle. Wait, no I don't.";
document.getElementById("multiplication").style.color= "purple";
document.getElementById("multiplication").style.fontFamily= "Comic Sans MS";

document.getElementById("division").innerHTML = "If I divide my time between " + nine + " puppies and " + three + " kitty cats, I have " + division + " jealous creatures left over, or something like that.";
document.getElementById("division").style.color= "pink";
document.getElementById("division").style.fontFamily= "Comic Sans MS";