const InputView = function () {

}

InputView.prototype.bindEvents() = function () {
  const input = document.querySelector('#string');
  input.addEventListener('input', event) => {
    const inputtedString = event.target.value;

  }
}

module.exports = InputView;
