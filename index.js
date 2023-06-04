const gameBoard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");
const startCells = ["", "", "", "", "", "", "", "", ""];
function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

function addGo(e) {
  console.log(e.target);
}
