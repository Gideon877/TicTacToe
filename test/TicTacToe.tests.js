const assert = require('assert');
const TicTacToe = require('../src/TicTacToe');
const Player = require('../src/Player');
const Board = require('../src/Board');

describe("TicTacToe", function() {
    var playerOne = new Player('X');
    var board = new Board();
    var ticTacToe = new TicTacToe(playerOne);

    it("should place the symbol for the first player on position 0", function () {
        assert.equal(ticTacToe.play(0), 
        " X |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n"
        );
    });
});