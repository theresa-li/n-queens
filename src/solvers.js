/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  
  var finder = function() {
  
  var board = new Board({n:n}); 
  var currBoard = board.rows();
    for (var i = 0; i < n; i++) { // Iterate through row
      var row = currBoard[i];
      for (var j = 0; j < n; j++) { // Iterate through column
        if (currBoard[i][j] === undefined) {
          continue;
        }
        var location = currBoard[i][j]; //hasRowConflictAt takes in a row
        // var viableLocation = (!currBoard.hasRowConflictAt(row) || !currBoard.hasColConflictAt(j)); 
        board.togglePiece(i,j);
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(i,j);
        }
      }
    }
    return currBoard;
  }
  var solution = finder();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n}); 
  var grid = board.rows();
  
  var finder = function(grid) {
    //place rook on first row
    //while (i < n) will iterate through row
    return finder(grid);
  }
  
  var solutionCount = finder(); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};