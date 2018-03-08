const Move = require('../src/Move');

module.exports = function TicTacToe(playerOne, playerTwo, boardController) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
    this.boardController = boardController;

    this.play = function(position) {
        var move = new Move(position, this.currentPlayer.symbol);
        var validation = boardController.execute(move);

        this.alternatePlayerOnSuccessfulMove(validation);

        return validation;  
    }

    this.alternateCurrentPlayer = function() {
        this.currentPlayer = this.currentPlayer === playerOne ? playerTwo : playerOne;
    }

    this.alternatePlayerOnSuccessfulMove = function(validation) {
        if (validation.isSuccessful()) {
            this.alternateCurrentPlayer();
        }
    }
}