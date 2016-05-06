var positions = [0, 0];

function updatePlayerPosition(player_number) {
  var player = document.getElementById('player_' + player_number)

  var arrayIndex = player_number - 1;
  var position = positions[arrayIndex];
  position += 2;

  player.style.left = position + '%';
  positions[arrayIndex] = position;

}

document.onkeyup = function (e) {
  switch (e.which) {
    case 17:
      updatePlayerPosition(1);
      break;
    case 13:
      updatePlayerPosition(2);
      break;
  }
};