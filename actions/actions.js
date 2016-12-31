var debugRepo = require('../firebase/debug-repository');
var deviceAction = require('./devices/device-action');

var actions = [
  {
    action: 'switch_device',
    fn: deviceAction
  }
]

function handleAction (req) {
  debugRepo.setDebugMessage(req.body);
  return new Promise((resolve, reject) => {
    var action = actions.find(action => action.action === req.body.result.action);
    if(action) {
      resolve(action);
    } else {
      reject('action not found');
    }
  })
  .then(action => {
    return action.fn(req);
  })
}

module.exports = handleAction;