const PubSub = require('../helpers/pub_sub.js')

const InputView = function () {

}

InputView.prototype.bindEvents() = function () {
  const input = document.querySelector('#string');
  input.addEventListener('input', event) => {
    const inputtedString = event.target.value;
    PubSub.publish('InputView:string-inputted', inputtedString)
  }
}

module.exports = InputView;
