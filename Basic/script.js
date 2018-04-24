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
  var maxArr = HighestNmb(numbers);
  document.getElementById("maxArray").innerHTML = "<p>" + maxArr + "</p>";

  // Basic Exercise 3 | Product

  array1 = [1, 2, 12, 90, 4, 100];
  input_array = [];
  document.getElementById("button1").onclick = function arrayInput() {
    input = parseInt(document.getElementById("input").value);
    input_array.push(input);

    a = input_array.length;
    p = 1;
    for (i = 0; i < a; i += 1) {
      p *= input_array[i];
    }

    document.getElementById("products").innerHTML =
      "<p>Product is: " + p + "</p>";
  };
};


// Basic Exercise 4 | Upper Case

function UpperCase(x) {
  Input_String = x.split(" ");
  
  console.log(Input_String); 

  Input_String.forEach()

}
