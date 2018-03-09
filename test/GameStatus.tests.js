const assert = require('assert');
const GameStatus = require('../src/GameStatus');

describe('Game Status', function () {
    it('should evaluate a winning game', function () {
        var board = [
            'X', 'X', 'X',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ];

        var gameStatus = new GameStatus(board);

        assert.equal(gameStatus.hasWinner(), true);
    });

    it("should evaluate a draw", function() {
        var board = [
            'X', 'O', 'X',
            'X', 'X', 'O',
            'O', 'X', 'O'
        ];

        var gameStatus = new GameStatus(board);

        assert.equal(gameStatus.isDraw(), true);
    });
});