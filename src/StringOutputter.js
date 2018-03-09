module.exports = function StringOutputter(formatter) {
    this.formatter = formatter;

    this.output = function(board, moveStatusMessage, gameStatusMessage) {
        return this.formatter.format(board, moveStatusMessage, gameStatusMessage)
    }
}