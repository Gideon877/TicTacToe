const assert = require('assert');

describe("Board Controller", function() {
    it("should place a symbol on the correct position of the board", function() {
        let board = new Board();
        let move = new Move(0, 'X');
        let boardController = new BoardController(board);

        boardController.execute(move);

        assert.deepEqual(boardController.getBoard(), [
            'X', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ' 
        ]);
    });
});