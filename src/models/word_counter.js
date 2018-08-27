const WordCounter = function () {

};


WordCounter.prototype.countWords = function (string) {
  result = string.split(" ").length
  return result
}

module.exports = WordCounter;
