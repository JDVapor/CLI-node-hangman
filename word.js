var Letter = require('./letter.js');

function Word(randWord) {
  this.letters = [];

  this.checkGuess = function(char) {
    var found = false
    this.letters.forEach(letter => {
      if (letter.guess(char)) {
        return found = true;
      }
    })
    return found;
  };

  this.fullWord = function() {
    for (var i = 0; i < randWord.length; i++) {
      var letterInWord = new Letter(randWord[i]);
      this.letters.push(letterInWord);
    };
    var display = this.letters.map(letter => letter.check()).join('');
    // console.log(display);
    // return display;
  };
}

module.exports = Word;
