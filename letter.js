function Letter(randLetter) {
  this.letter = randLetter;
  this.guessed = false;

  this.check = function() {
    if (this.guessed === true) {
      return this.letter;
    } else {
      return '_';
    }
  };

  this.guess = function(char) {
    return this.guessed = (char === this.letter);
  };
}

module.exports = Letter;
