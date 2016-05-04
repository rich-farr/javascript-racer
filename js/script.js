
// var startButton = document.getElementById("start_button"); //start_race is the Start button
// var trackOne = document.getElementById("player1_strip");
// var moves = trackOne.querySelectorAll("td");

// var carOne = document.getElementById("car1");

// // startButton.addEventListener ("click", function() {
// //   if (carOne.className === "hide") {
// //     carOne.className = "";
// //   } else carOne.className = "hide";
// // });

// function moveKeypress(event) {
//   if(event.which === 13) {
//     nextElement = nextElementSibling.innerHTML.carOne;
//   }
// };

// click start race button
//   car appears in td
//   hit Enter
//     class Active moves to next td
//       car moves with class Active

//   var player1 = document.getElementById('player1_strip');
//   var player2 = document.getElementById('player2_strip');

//   var player1_moves = player1.querySelectorAll('td');
//   var player2_moves = player2.querySelectorAll('td');

// // Set start state of the game
// function startGame(boing) {
//   for (var i = 0; i < boing.length; i++) {
//     // boing[i].className = "";
//     boing[0].className = "active";
//   };
// };

// startGame(player1_moves);
// startGame(player2_moves);

// // update player position function
// function updatePlayerPosition(player) {
//   for(var i = 0; i < player.length; i++ ) {
//     if(player[i].className === "active") {
//       nextElement = player[i].nextElementSibling;
//       if (player[i] === player[3]) {
//         alert("Game Over")
//         startGame(player1_moves);
//         startGame(player2_moves);
//       } else {
//         nextElement.className = "active";
//         player[i].className = "";
//       };
//     break;
//     };
//   };
// };

// // run the update player function based on the key press
// document.onkeyup = function(e) {
//   if (e.which === 81) {
//     updatePlayerPosition(player1_moves)
//   } else if (e.which === 80) {
//     updatePlayerPosition(player2_moves)
//   }
// };

var playerOne = document.getElementById('player_1');
var playerTwo = document.getElementById('player_2');
var carPos = 0;

function moveCar(e) {
  if (e.keyCode == 39) {
    carPos += 2;
    playerOne.style.left = carPos + 'em';
  }

  if (e.keyCode == 37) {
    carPos -= 2;
    playerOne.style.left = carPos + 'em';
  }

};

document.onkeyup = moveCar;