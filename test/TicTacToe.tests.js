const assert = require("assert");
const TicTacToe = require("../src/TicTacToe");
const Player = require("../src/Player");
const Board = require("../src/Board");
const BoardController = require("../src/BoardController");
const MoveValidator = require("../src/MoveValidator");
const OutputFormatter = require("../src/OutputFormatter");
const StringOutputter = require("../src/StringOutputter");

describe("TicTacToe", function() {
    var ticTacToe; 

    beforeEach(function() {
        var playerOne = new Player('X');
        var playerTwo = new Player('O');
        var board = new Board();
        var outputFormatter = new OutputFormatter();
        var stringOutputter = new StringOutputter(outputFormatter);
        var boardController = new BoardController(board);

        ticTacToe = new TicTacToe(playerOne, playerTwo, boardController, stringOutputter);
    });

    it("should place the symbol for the first player on position 0", function () {
        assert.equal(ticTacToe.play(0), 
        " X |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n" +
        "===+===+===\n" +
        "   |   |   \n"
        );
    });

    it("should alternate players", function() {
        ticTacToe.play(0);

        assert.equal(ticTacToe.play(4).asString,
            " X |   |   \n" +
            "===+===+===\n" +
            "   | O |   \n" +
            "===+===+===\n" +
            "   |   |   \n"  +
            "Player O has played on position 4.\n"+
            "Next player's turn.\n"
        );
    });

    it("should not alternate player if the play was not valid or legal", function() {
        ticTacToe.play(0);
        ticTacToe.play(4);
        ticTacToe.play(3);
        ticTacToe.play(6);
        ticTacToe.play(6);

        assert.equal(ticTacToe.play(7).asString,
            " X |   |   \n" +
            "===+===+===\n" +
            " X | O |   \n" +
            "===+===+===\n" +
            " O | X |   \n"  +
            "Player X has played on position 7.\n" +
            "Next player's turn.\n"
        );
    });

    it("should announce the winner of a winning game", function() {
        ticTacToe.play(0);
        ticTacToe.play(4);
        ticTacToe.play(3);
        ticTacToe.play(6);
        ticTacToe.play(7)

        assert.equal(ticTacToe.play(2).asString,
            " X |   | O \n" +
            "===+===+===\n" +
            " X | O |   \n" +
            "===+===+===\n" +
            " O | X |   \n"  +
            "Player O has played on position 2.\n" +
            "Player O has won the game.\n"
        );
    });
});