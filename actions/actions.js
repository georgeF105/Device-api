var debugRepo = require('../firebase/debug-repository');
var deviceAction = require('./devices/device-action');

var actions = [
  {
    action: 'switch_device',
    fn: deviceAction
  }
]

function handleAction (req, res) {
  debugRepo.setDebugMessage(req.body);
  actions.find(action => action.action === req.body.result.action).fn(req, res);
}

module.exports = handleAction;