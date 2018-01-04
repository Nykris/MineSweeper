
const generatePlayerBoard = (numberOfRows, numberOfColumns) =>
{
  let board = [];
  for (rowCounter = 0; rowCounter < numberOfRows; rowCounter++)
  {
    let row = [];
    for (colCounter = 0; colCounter < numberOfColumns; colCounter++)
    {
      row.push(' ');
    }
    board.push(row);

  } // row generator
  return board;

} // end generatePlayerBoard function

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>
{
  let board = [];
  for (rowCounter = 0; rowCounter < numberOfRows; rowCounter++)
  {
    let row = [];
    for (colCounter = 0; colCounter < numberOfColumns; colCounter++)
    {
      row.push(null);
    }
    board.push(row);

  } // row generator
  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs)
  {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColIndex = Math.floor(Math.random() * numberOfColumns);
    if(board[randomRowIndex][randomColIndex] != 'B')
    {
      board[randomRowIndex][randomColIndex] = 'B';
      numberOfBombsPlaced++;
    }

  }

  return board;
}

const printBoard = (board) =>
{
  board.map(row => row.join(' | '));
}

printBoard(generatePlayerBoard);
//console.log(generateBombBoard(3, 4, 5));
