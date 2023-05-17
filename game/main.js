var currentPlayer;
var data;
var gameRunning;

// 0 = empty
// 1 = player 1
// 2 = player 2

function setup() {
  data = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  currentPlayer = 1;
  updateCurrentPlayer();
  document.querySelector("#currentplayerbox").style = "display: flex";
  document.querySelector("#ondraw").style = "display:none";
  document.querySelector("#onwin").style = "display:none";

  var fieldElements = document.querySelectorAll("#playarea *");
  fieldElements.forEach((element) => {
    element.classList.remove("player1");
    element.classList.remove("player2");
  });

  gameRunning = true;
}

function updateCurrentPlayer() {
  var elements = document.querySelectorAll("[data-currentplayer]");
  elements.forEach((element) => {
    element.classList.value = "player" + currentPlayer;
  });
}

function clickField(e) {
  var clickedField = e.target;
  var row = clickedField.getAttribute("data-row");
  var col = clickedField.getAttribute("data-col");

  if (gameRunning && data[row][col] == 0) {
    data[row][col] = currentPlayer;
    clickedField.classList.add("player" + currentPlayer);
    var fieldsWinner = checkWin();
    if (fieldsWinner) {
      // one player has won
      gameRunning = false;
      document.querySelector("#currentplayerbox").style = "display:none";
      document.querySelector("#onwin").style = "display:block";
    } else if (checkIfDraw()) {
      // draw
      document.querySelector("#currentplayerbox").style = "display:none";
      document.querySelector("#ondraw").style = "display:block";
    } else {
      // switch player
      currentPlayer = currentPlayer == 1 ? 2 : 1;
      updateCurrentPlayer();
    }
  }
}

function checkIfDraw() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (data[row][col] == 0) {
        return false;
      }
    }
  }
  return true;
}

function checkWin() {
  // check rows
  for (var row = 0; row < 3; row++) {
    if (
      data[row][0] == currentPlayer &&
      data[row][1] == currentPlayer &&
      data[row][2] == currentPlayer
    ) {
      return [
        [row, 0],
        [row, 1],
        [row, 2],
      ];
    }
  }

  // check columns
  for (var col = 0; col < 3; col++) {
    if (
      data[0][col] == currentPlayer &&
      data[1][col] == currentPlayer &&
      data[2][col] == currentPlayer
    ) {
      return [
        [0, col],
        [1, col],
        [2, col],
      ];
    }
  }

  // Diagonal 1
  if (
    data[0][0] == currentPlayer &&
    data[1][1] == currentPlayer &&
    data[2][2] == currentPlayer
  ) {
    return [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
  }

  // Diagonal 2
  if (
    data[2][0] == currentPlayer &&
    data[1][1] == currentPlayer &&
    data[0][2] == currentPlayer
  ) {
    return [
      [2, 0],
      [1, 1],
      [0, 2],
    ];
  }
  // no win
  return false;
}
