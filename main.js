console.log('jsArrayChallenges');

// Challenge #1: Highest Scoring Word
// Given a string of 2 words, find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation. Display (id='challenge-1') the word that is the highest scoring. If two words score the same, display the word that appears earliest in the original string.

// var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

var challengeOneInput = "jumbo shrimp";
var singleWord = challengeOneInput.split(' ');
var jumbo = singleWord[0].split('');
console.log(jumbo);
var shrimp = singleWord[1].split('');
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaSplit = alpha.split('');
var jumboScore = 0;
    for(var i = 0; i < jumbo.length; i++) {
        var score = alphaSplit.indexOf(jumbo[i]) +1;
        jumboScore += score;
    }
    var shrimpScore = 0;
    for(var j = 0; j < shrimp.length; j++) {
        var score = alphaSplit.indexOf(shrimp[j]) +1;
        shrimpScore += score;
    }

console.log(jumboScore);
console.log(shrimpScore);

// return higher scoring word
var answer;
if (shrimpScore >= jumboScore) {
    answer = shrimp.join('') + '=' + shrimpScore;
} else {
    answer = jumbo.join('') + '=' + jumboScore;
}

// put into html div
var challenge1 = document.getElementById(challengeOne);
challengeOne.innerHTML = answer;