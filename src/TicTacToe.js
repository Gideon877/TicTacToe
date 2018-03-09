const Move = require('../src/Move');
const GameStatusMessage = require("./GameStatusMessage");

module.exports = function TicTacToe(playerOne, playerTwo, boardController) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
    this.boardController = boardController;

    this.play = function(position) {
        var move = new Move(position, this.currentPlayer.symbol);
        var validation = boardController.execute(move);
        gameStatusMessage = gameStatusMessage.generate();
        this.alternatePlayerOnSuccessfulMove(validation);

        var stringToOutput = outputter.output(boardController.getBoard(), validation.status(), gameStatusMessage);

        return stringToOutput;
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