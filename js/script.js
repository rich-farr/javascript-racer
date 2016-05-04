
var startRace = document.getElementById("start_race");
var carOne = document.getElementById("car1");
var trackOne = document.getElementById("player1_strip");
var carTwo = document.getElementById("car2");
var trackTwo = document.getElementById("player2_strip");

startRace.addEventListener("click", function() {
  if (carOne.className === "hide") {
    carOne.className = "";
  } else carOne.className = "hide";
});