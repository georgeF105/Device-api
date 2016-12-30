
var firebase = require('./firebase');

function DebugRepository() {
}

function setDebugMessage(message) {
  firebase.ref('debugMessage').set(message);
}

DebugRepository.prototype = {
    setDebugMessage: setDebugMessage
};

var debugRepository = new DebugRepository();

module.exports = debugRepository;
