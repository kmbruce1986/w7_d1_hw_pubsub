const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

}




InputView.prototype.bindEvents = function() {
  // this refers to the form itself
  const input = document.querySelector('#wordcounter-form');
  // this refers to the submit button
  input.addEventListener('submit', (event) => {
    event.preventDefault()
    // this catches the data entered
    const inputtedString = event.target.text.value;
    PubSub.publish('InputView:string-inputted', inputtedString);
  })

};

module.exports = InputView;
