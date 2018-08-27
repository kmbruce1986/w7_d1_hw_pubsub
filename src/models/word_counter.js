const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:string-inputted', (event) => {
    const inputtedString = event.detail;
    const result = this.countWords(inputtedString);
    PubSub.publish('WordCounter:result', result);
  })
}


WordCounter.prototype.countWords = function (string) {
  result = string.split(" ").length
  return result
}

module.exports = WordCounter;
