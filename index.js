var Word = require('./word.js');
var inquirer = require("inquirer");

var words = ['one', 'two', 'three', 'four', 'five']

var guessesLeft = 11;

var word = new Word(words[Math.floor(Math.random() * words.length)]);

word.fullWord();

const playGame = () => {
  inquirer
    .prompt({
      name: "userGuess",
      message: "Please guess a letter!"
    })
    .then(function(answer) {
      guessesLeft--;
      console.log(`You have ${guessesLeft} guesses left.`);
      word.checkGuess(answer.userGuess) ? console.log(word.letters.map(letter => letter.check()).join('')) : console.log(word.letters.map(letter => letter.check()).join(''));
      if (guessesLeft > 0) {
        playGame();
      } else {
        console.log(`GAME OVER the word was`);
      }
    });
}
playGame();
