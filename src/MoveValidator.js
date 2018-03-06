module.exports = function MoveValidator(move, board) {
    this.move = move;
    this.board = board;

    this.isSuccessfulMove = function(){
        return this.isInBounds() && this.isANumber() && this.hasSpace();
    }
    
    this.isInBounds = function() {
        return +move.position >= 0 && +move.position <= 8;
    }

    this.isANumber = function() {
        return !isNaN(+move.position);
    }

    this.hasSpace = function() {
        return board[+move.position] == ' ';
    }

}