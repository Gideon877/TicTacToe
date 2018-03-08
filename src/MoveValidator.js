module.exports = function MoveValidator(move, board) {
    this.move = move;
    this.board = board;

    this.isSuccessfulMove = function() {
        return this.isInBounds() && this.isANumber() && this.hasSpace();
    }

    this.status = function() {
        if (! this.isInBounds()) {
            return "Error: Position is out of bounds.";
        }

        if (! this.isANumber()) {
            return "Error: Please input a number between 0-8.";
        }

        if (! this.hasSpace()) {
            return "Error: That position has already been played.";
        }

        return "Player " + move.symbol + " has played on position " + move.position + "."; 
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