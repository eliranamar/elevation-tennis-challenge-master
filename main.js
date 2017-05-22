// write your code here to make the tests pass
var TennisGame = function (name1, name2) {
    this.playerOneName = name1;
    this.playerTwoName = name2;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.playerOneScores = function () {
        this.playerOneScore += 1;
    }
    this.playerTwoScores = function () {
        this.playerTwoScore += 1;
    }
    this.isDeuce = function () {
        if (this.playerOneScore >= 3 && this.playerTwoScore >= 3) {
            if (this.playerOneScore === 3 && this.playerTwoScore === 3) {
                return true;
            }
            else{
                return false;
            }
        } else {
            return false;
        }
    }
    this.playerWithHighestScore = function (){
        if (this.playerOneScore > this.playerTwoScore) {
            return this.playerOneName;
        } else {
            return this.playerTwoName;
        }
    }
    this.hasWinner = function () {
        if (!this.isDeuce()) {
            if (this.playerOneScore == 4 || this.playerTwoScore == 4) {
                return true;
            } else {
                return false;
            }
        } else if (this.playerOneScore >= 6 || this.playerTwoScore >= 6) {
            return true;
        } else {
            return false;
        }
    }
    this.hasAdvantage = function () {
        if (this.playerOneScore == 5 || this.playerTwoScore == 5) {
            return true;
        } else {
            return false;
        }
    }
    this.translateScore = function (num){
        var response = "";
        switch (num) {
            case 0:
                response = "Love";
                break;
            case 1:
                response = "Fifteen";
                break;
            case 2:
                response = "Thirty";
                break;
            case 3:
                response = "Forty";
                break;
        
            default:
                break;
        }
        return response;
    }
    this.getScore = function (){
        if (this.hasAdvantage()) {
            if (this.playerOneScore == 5) {
                return "Advantage " + this.playerOneName;
            } else {
                return "Advantage " + this.playerTwoName;                
            }
        } 
        if (this.isDeuce()) {
            return "Deuce";
        }
        if (this.playerOneScore === this.playerTwoScore) {
            return "Fifteen all";
        }   
        if (this.hasWinner()) {
            if (this.playerOneScore > this.playerTwoScore) {
                return this.playerOneName + " wins";
            } else {
                return this.playerTwoName + " wins";
            }
        }
        var score1 = "", score2 = "";
        switch (this.playerOneScore) {
            case 0:
                score1 = "Love";
                break;
            case 1:
                score1 = "Fifteen";
                break;
            case 2:
                score1 = "Thirty";
                break;
            case 3:
                score1 = "Forty";
                break;
        
            default:
                break;
        }
        switch (this.playerTwoScore) {
            case 0:
                score2 = "Love";
                break;
            case 1:
                score2 = "Fifteen";
                break;
            case 2:
                score2 = "Thirty";
                break;
            case 3:
                score2 = "Forty";
                break;
        
            default:
                break;
        }
        return score1 + ", " + score2;
    }
}
// test 2