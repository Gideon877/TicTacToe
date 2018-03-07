module.exports = function Board() {
    this.state = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ];

    this.place = function(move) {
        this.state[move.position] = move.symbol;
    }

    this.currentState = function(){
        return this.state.slice();
    }
}