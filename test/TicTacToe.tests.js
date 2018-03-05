const assert = require('assert');

describe('TicTacToe', function () {
    let playerOne = new PlayerOne();
    let board = new Board();
    let ticTacToe = new TicTacToe(playerOne);

    it('should place the symbol for the first player', function () {
        assert.equal(ticTacToe.playe(0), 
        " X |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n"
        );
    });
});