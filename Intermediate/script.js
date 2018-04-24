// Intermediate Exercise 1 | Compare two numbers
let classroom = [
  {
    name: "Martin",
    grade: 76
  },
  {
    name: "Thomas",
    grade: 85
  },
  {
    name: "Klaus",
    grade: 65
  },
  {
    name: "Maria",
    grade: 93
  },
  {
    name: "David",
    grade: 81
  }
];
sum = 0;
function avgPoints(classArray) {
  classArray.forEach(function(e) {
    sum += e.grade;
    avg = sum / classArray.length;
  });

  if (avg < 60) {
    document.getElementById("avg").innerHTML = "<p>Grade: < 60 F</p>";
  } else if (avg < 70 && avg >= 60) {
    document.getElementById("avg").innerHTML = "<p>Grade: < 70 D</p>";
  } else if (avg < 80 && avg >= 70) {
    document.getElementById("avg").innerHTML = "<p>Grade: < 80 C</p>";
  } else if (avg < 90 && avg >= 80) {
    document.getElementById("avg").innerHTML = "<p>Grade: < 90 B</p>";
  } else if (avg <= 100 && avg >= 90) {
    document.getElementById("avg").innerHTML = "<p>Grade: = 100 A</p>";
  }
}
avgPoints(classroom);
