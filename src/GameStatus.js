module.exports = function GameStatus(board) {
    this.board = board;
    this.winConditions = [
        (/OOO....../),
        (/...OOO.../),
        (/......OOO/),
        (/O..O..O../),
        (/.O..O..O./),
        (/..O..O..O/),
        (/O...O...O/),
        (/..O.O.O../),
        (/XXX....../),
        (/...XXX.../),
        (/......XXX/),
        (/X..X..X../),
        (/.X..X..X./),
        (/..X..X..X/),
        (/X...X...X/),
        (/..X.X.X../)
    ];

    this.hasWinner = function() {
        var boardAsString = board.join('');

        for (i = 0; i < this.winConditions.length; i++) {
            var isAMatch = boardAsString.match(this.winConditions[i]);

            if (isAMatch) {
                return true;
            }
        }

    return false;
    }

    this.isDraw = function() {
        if (this.board.indexOf(' ') === -1) {
            return true;
        }
        
        return false;
    }
    
}