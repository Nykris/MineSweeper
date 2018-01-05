
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

// This is the method I don't understand
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>
{
  const neighborOffsets = [
    [-1, -1], [-1, 0], [-1, 0],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0]; // Why just the 0th element?
    const neighborColumnIndex = columnIndex + offset[1]; // Same here for 1st?
    if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns)
      {
        if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B')
        {
          numberOfBombs++;
        }
      }
  });
  return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>
{
  if(playerBoard[rowIndex][columnIndex] != ' ')
  {
    console.log("This tile has already been flipped!")
    return;
  }
  else if (bombBoard[rowIndex][columnIndex] === 'B')
  {
      playerBoard[rowIndex][columnIndex] = 'B';
  }
  else
  {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,
    rowIndex, columnIndex);
  }

}

const printBoard = printInput =>
{
  console.log(printInput.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(4, 4);
let bombBoard = generateBombBoard(4, 4, 5);

console.log("Player board:");
printBoard(playerBoard);

console.log("Bomb board:");
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 2, 2);
console.log("Updated Player Board:");
printBoard(playerBoard);
