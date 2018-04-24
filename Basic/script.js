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

//
