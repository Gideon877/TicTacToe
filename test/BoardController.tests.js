const assert = require('assert');
const Board = require('../src/Board');
const Move = require('../src/Move');
const BoardController = require('../src/BoardController');

describe("Board Controller", function() {
    it("should place a symbol on the correct position of the board", function() {
        var board = new Board();
        var move = new Move(0, 'X');
        var boardController = new BoardController(board);

        boardController.execute(move);

        assert.deepEqual(boardController.getBoard(), [
            'X', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ' 
        ]);
    });

    it("should return success message", function() {
        var board = new Board();
        var move = new Move(0, 'X');
        var boardController = new BoardController(board);

        assert.deepEqual(boardController.execute(move).status(), "Player X has played on position 0.");
    });

});