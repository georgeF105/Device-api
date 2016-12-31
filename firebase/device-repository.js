
var firebase = require('./firebase');

var deviceRef = firebase.ref('devices');

function setDeviceState(device, state) {
  var updates = {};
  updates[device + '/state'] = state;
  deviceRef.update(updates);
}

module.exports = {
  setDeviceState
};