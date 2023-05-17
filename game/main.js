var currentPlayer;
var data;

// 0 = empty
// 1 = player 1
// 2 = player 2

function setup() {
  currentPlayer = 1;
  data = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  // var playarea = document.querySelector("#playarea");

  // for (var row = 0; row < 3; row++) {
  //   for (var col = 0; col < 3; col++) {
  //     var field = document.createElement("div");
  //     field.setAttribute("id", "field-" + col + "-" + row);
  //     //field.innerHTML = "Field<br> Col " + col + "<br> Row " + row;
  //     field.setAttribute("data-row", row);
  //     field.setAttribute("data-col", col);
  //     field.onclick = clickField;
  //     playarea.appendChild(field);
  //   }
  // }
}

function clickField(e) {
  var clickedField = e.target;
  var row = clickedField.getAttribute("data-row");
  var col = clickedField.getAttribute("data-col");

  if (data[row][col] == 0) {
    data[row][col] = currentPlayer;
    clickedField.classList.add("player" + currentPlayer);
    // clickedField.innerHTML = currentPlayer;

    currentPlayer = currentPlayer == 1 ? 2 : 1;
  }
}
