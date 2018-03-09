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

    it("should announce a winner in a winning game", function() {
        var moveOne = new Move(0, 'X');
        var moveTwo = new Move(4, 'X');
        var moveThree = new Move(8, 'X');
        var board = new Board();
        var boardController = new BoardController(board);

        boardController.execute(moveOne);
        boardController.execute(moveTwo);
        boardController.execute(moveThree)

        assert.equal(boardController.hasWinner(), true);
    });
});