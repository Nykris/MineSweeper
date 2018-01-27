'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
    var row = [];
    for (colCounter = 0; colCounter < numberOfColumns; colCounter++) {
      row.push(' ');
    }
    board.push(row);
  } // row generator
  return board;
}; // end generatePlayerBoard function

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var bombsRemaining = numberOfBombs;
  var bombBoard = [];
  var boardGenerator = function boardGenerator() {
    for (rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
      var row = [];
      for (colCounter = 0; colCounter < numberOfColumns; colCounter++) {
        if (row[colCounter != 'B'] && bombsRemaining > 0 && Math.random() < 0.5) {
          row.push('B');
          bombsRemaining--;
        } else {
          row.push(null);
        }
      }
      bombBoard.push(row);
    }
  }; // boardGenerator function
  if (bombsRemaining > 0) {
    boardGenerator();
  } else {
    return bombBoard;
  }
};

console.log(generatePlayerBoard(2, 4));
console.log(generateBombBoard(2, 4, 5));