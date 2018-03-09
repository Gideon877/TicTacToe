const MoveValidator = require("./MoveValidator");
const GameStatus = require("./GameStatus");

module.exports = function BoardController(board) {
    this.board = board;

    this.execute = function(move) {
        var validation = new MoveValidator(move, this.board.currentState());

        if(validation.isSuccessfulMove()){
            this.board.place(move);
            this.gameStatus = new GameStatus(this.getBoard());
        }

        return validation;
    }

    this.hasWinner = function() {
        return this.gameStatus.hasWinner();
    }

    this.isDraw = function() {
        return this.gameStatus.isDraw();
    }
    
    this.getBoard = function(board) {
        return this.board.state;
    }

}