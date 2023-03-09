/* eslint-disable indent */
// create a module for game board 
// Needs to be able to be init'd and reset
const board = (() => {
  const tiles = [];
  const boardDiv = document.getElementById("board");
  const playButton = document.getElementById("playbtn");
  let tileButtons = [];

  // Member Functions
  playButton.addEventListener("click", () => {
    clearBoard();
    initBoard();
  });

  const clearBoard = () => {
    // remove old
    tiles.length = 0;
    boardDiv.replaceChildren();
  };

  const computerMove = () => {
    // pick a random tile, if the innerHTML is an X, pick another one
    // if it doesn't have any innerHTML, make it a O
    let index = Math.floor(Math.random() * (0, 9) + 0);
    if (tiles[index].innerHTML === "") {
      tiles[index].innerHTML = "O";
    } else {
      computerMove();
    }
  };

  const initBoard = () => {
    // initialize the board
    for (let i = 0; i < 9; i++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "tile");
      boardDiv.append(newDiv);
      tiles.push(newDiv);
    }

    tileButtons = document.querySelectorAll(".tile");
    tileButtons.forEach((tile) => {
      tile.addEventListener("click", () => {
        if (tile.innerHTML === "") {
          tile.innerHTML = "X";
          computerMove();
        }
      });
    });
  };

  return { tiles, initBoard };
})();


board.initBoard();

