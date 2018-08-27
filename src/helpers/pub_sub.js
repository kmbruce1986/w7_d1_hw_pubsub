const PubSub = {
  publish: function (channel, payload) {
    const Event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
