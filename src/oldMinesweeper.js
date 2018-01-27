const printBoard = theBoard =>
{
  console.log("Current Board:");
  console.log(theBoard[0].join(" | "));
  console.log(theBoard[1].join(" | "));
  console.log(theBoard[2].join(" | "));
}
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
