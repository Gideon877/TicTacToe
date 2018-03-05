const Move = require('../src/Move');

module.exports = function TicTacToe(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;

    this.play = function(position) {
        var move = new Move(position, symbol);
    }
}