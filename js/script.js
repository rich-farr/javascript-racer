var positions = [0, 0];


function chooseCar () {
  var cars = ['red', 'yellow', 'green', 'blue', 'black', 'silver', 'orange', 'white'];
  var playerCars = [];
  for (var i = 0; i < 2; i++) {
  var choice = prompt('Player ' + (i + 1) + ', what colour car would you like?\n\nThe options are: ' + cars +'.');
    choice = choice.toLowerCase();
    console.log(choice);
    playerCars.push(choice);
  }
  placeCars(playerCars);
}

function placeCars(array) {
  for (var i = 0; i < 2; i++) {
    var playerCar = "player_" + (i + 1);
    var addCar = document.getElementById(playerCar);
    addCar.innerHTML = '<img src="img\/' + array[i] + '_car.png" class="car">';
  }
  alert("Press Enter or OK to start the race");
  lights();
}

function lights () {
  var showLight = document.getElementById('lightbox');
  showLight.innerHTML = '<img src="img\/0_red.png" class="light">';

  (function myLoop(i) {         
    setTimeout(function () {  
      showLight.innerHTML = '<img src="img\/' + (i - 1) + '_red.png" class="light">';    
      if (i === 1) {
        setTimeout(function () {
        showLight.innerHTML = '<img src="img\/all_green.png" class="light">';
          setTimeout(function () {
            showLight.innerHTML = '';
          }, 1000)
        }, 1000)
      }        
      if (--i) myLoop(i);
     }, 1000)
  })(4);
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
}

  function resetGame () {
    player_1.innerHTML = '';
    player_2.innerHTML = '';
    for (var i = 0; i < positions.length; i++) {
      positions[i] = 0;
      player_1.style.left = 0;
      player_2.style.left = 0;
    }
  }

document.onkeyup = function (e) {
  switch (e.which) {
    case 32:
      chooseCar();
      break;
    case 81:
      updatePlayerPosition(1);
      break;
    case 80:
      updatePlayerPosition(2);
      break;
  }
}
