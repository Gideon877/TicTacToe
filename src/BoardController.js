const MoveValidator = require("./MoveValidator");

module.exports = function BoardController(board) {
    this.board = board;

    this.execute = function(move) {
        var validation = new MoveValidator(move, this.board.currentState());

        if(validation.isSuccessfulMove()){
            this.board.place(move);
        }

        return validation;
    }
    
    
    this.getBoard = function(board) {
        return this.board.state;
    }

}