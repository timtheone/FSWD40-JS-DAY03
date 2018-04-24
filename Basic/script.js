window.onload = function() {



// Basic Exercise 1 | Temperature
function temperature() {
  min = Math.sign(-5);
  max = 25;
  rndNumber = Math.floor(Math.random() * (max - min) + min);
  document.getElementById("temp").innerHTML = "<p>" + rndNumber + " C</p>";
  if (rndNumber <= 10) {
    document.getElementById("temp").innerHTML += "<p>The weather is cold</p>";
  } else {
    document.getElementById("temp").innerHTML += "The weather is moderate";
  }
}
temperature();

// Basic Exercise 2 | Highest value in Array



function HighestNmb(arr) {
    return Math.max.apply(null, arr);
}

var numbers = [24, 150, 57, 9]; 
var maxArr = HighestNmb(numbers)
document.getElementById("maxArray").innerHTML = "<p>" + maxArr + "</p>";

}
