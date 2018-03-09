const assert = require("assert");
const OutputFormatter = require("../src/OutputFormatter");
const StringOutputter = require("../src/StringOutputter");

describe("String Outputter", function() {
    it("should output a board as a formatted string", function() {
        var formatter = new OutputFormatter();
        var stringOutputter = new StringOutputter(formatter);

        var board = [
            'X', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ' 
        ];

        var message = "Player X has played on position 0.";
        var messageTwo = "Next player's turn.";

        assert.equal(stringOutputter.output(board, message, messageTwo),
            " X |   |   \n" +
            "===+===+===\n" +
            "   |   |   \n" +
            "===+===+===\n" +
            "   |   |   \n" +
            "Player X has played on position 0.\n" +
            "Next player's turn.\n"
        );
    });
});