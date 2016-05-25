var positions = [0, 0];

// var el = document.getElementsByClassName("hide-car");

// el.addEventListener("keypress", function(startGame));

// function startGame() {
//   console.log("omglolwtf");
//   var newClass = document.getElementsByClassName("hide-car");
//   for (var i = 0; i < newClass.length; i++) {
//     newClass[0].className = "car";
//   }
// }


function startGame() {
  for (var i = 0; i < 2; i++) {
    var cars = ['red', 'yellow'];
    var playerCar = "player_" + (i + 1);
    var addCar = document.getElementById(playerCar);
    addCar.innerHTML = '<img src="img\/' + cars[i] + '_car.png" class="car">';
    console.log(addCar);
    // var addCar = document.getElementBy("hide-car");
    // newClass[0].className = "car";
  }
}

function updatePlayerPosition(player_number) {
  var player = document.getElementById('player_' + player_number)

  var arrayIndex = player_number - 1;
  var position = positions[arrayIndex];

  if (position >= 88) {
    alert('Player ' + player_number + ' wins!');
    resetGame();
  } else {
    position += 1;
    player.style.left = position + '%';
    positions[arrayIndex] = position;
  }
  
  function resetGame () {
    for (var i = 0; i < positions.length; i++) {
      positions[i] = 0;
      player_1.style.left = 0;
      player_2.style.left = 0;
    }
  }
}

document.onkeyup = function (e) {
  switch (e.which) {
    case 32:
      startGame();
      break;
    case 81:
      updatePlayerPosition(1);
      break;
    case 80:
      updatePlayerPosition(2);
      break;
  }
}
