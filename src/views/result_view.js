const ResultView = function () {

};


ResultView.prototype.updateView = function () {
  const ResultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result} words.`
};



module.exports = ResultView;
