
const board = [ ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'] ]; 
const solutions = []; 

function isSafe(board, row, col) {
    // Upper Horizontal 
    for(let i = row; i > -1; i--) {
        if(board[i][col] === 'Q') { 
            return false;
        }
    }

    // Left Top Diagonal 
    for(let i = row, j = col; i > -1 && j > -1; i--, j--) {
        if(board[i][j] === 'Q') {
            return false;
        }
    } 

    // Right Top Diagonal 
    for(let i = row, j = col; i > -1 && j < board.length; i--, j++) {
        if(board[i][j] === 'Q') {
            return false;
        }
    }

    return true;
} 

function placeQueen(board, row) {
    if(row === 4) { 
        let arr = []; 
        for(let row = 0; row < board.length; row++) {
            arr.push(board[row].join('')); 
        } 
        solutions.push(arr);
        return; 
    } 

    for(let i = 0; i < board.length; i++) {
        if(isSafe(board, row, i)) {
            board[row][i] = 'Q'; 
            placeQueen(board, row+1); 
            board[row][i] = '.'; 
        }
    }
}

placeQueen(board, 0);


solutions



