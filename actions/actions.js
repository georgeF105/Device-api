var debugRepo = require('../firebase/debug-repository');

function handleAction (req) {
  debugRepo.setDebugMessage(req.body);
}

module.exports = handleAction;