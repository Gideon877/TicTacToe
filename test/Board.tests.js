const assert = require('assert');
const Board = require('../src/Board');
const Move = require('../src/Move');

describe('Board', function () {
    it('should place a symbol on a specific position', function () {
        var move = new Move(0, 'X');
        var board = new Board();

        board.place(move);
        
        assert.deepEqual(board.state, [
                'X', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ]);
    });
});
