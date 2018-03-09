module.exports = function GameStatusMessageGenerator(boardController, player) {
    this.boardController = boardController;
    this.player = player;

    this.generate = function() {
        if (boardController.hasWinner()) {
             return "Player " + this.player.symbol + " has won the game.";
        }

        if (boardController.isDraw()) {
            return "Draw!";
        }

        return "Next player's turn.";
    }
}