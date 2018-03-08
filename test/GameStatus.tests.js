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
});