module.exports = function OutputFormatter() {
    this.border = "\n===+===+===\n";

    this.format = function(board, moveStatusMessage, gameStatusMessage) {
        return this.joinRow(this.firstRow(board)) + this.border +
        this.joinRow(this.secondRow(board)) + this.border +
        this.joinRow(this.thirdRow(board)) +
        "\n" + moveStatusMessage +
        "\n" + gameStatusMessage + "\n";
    }

    this.firstRow = function(board) {
        return board.slice(0, 3);
    }

    this.secondRow = function(board) {
        return board.slice(3, 6);
    }

    this.thirdRow = function(board) {
        return board.slice(6, 9);
    }

    this.joinRow = function(row) {
        return row.join(' | ');
    }

};