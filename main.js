// write your code here to make the tests pass
var TennisGame = function () {
    this.playerOneScores = function () {
        this.playerOneScore = 1;
    }
    this.playerTwoScores = function () {
        this.playerTwoScore = 1;
    }
    this.isDeuce = function () {
        if (this.playerOneScore >= 3 && this.playerTwoScore >= 3) {
            return true;
        } else {
            return false;
        }
    }
}
