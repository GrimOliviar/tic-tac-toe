var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  var currentPlayer = 'X';
  
  function placeSymbol(row, col) {
    if (board[row][col] !== '' || checkWin()) {
      return;
    }
  
    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
  
    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetBoard();
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true;
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true;
      }
    }
  
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true;
    }
  
    return false;
  }
  
  function checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
  
  function resetBoard() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
  
    var cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }
  
  
