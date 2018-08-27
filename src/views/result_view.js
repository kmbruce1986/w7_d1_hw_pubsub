const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })
}

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result} word(s).`;
};



module.exports = ResultView;
