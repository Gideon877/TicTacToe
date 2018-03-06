const assert = require("assert");

const Move = require("../src/Move");
const MoveValidator = require("../src/MoveValidator");

describe("Move Validator", function() {
    it("should return false for an invalid move", function() {
        var move = new Move(9, 'X');

        var board = [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ];

        var moveValidator = new MoveValidator(move, board);
        
        assert.equal(moveValidator.isSuccessful(), false);
    })
});