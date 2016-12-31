var deviceRepo = require('../../firebase/device-repository');

var devices = [
  {
    value: 'bedroom_fan',
    name: 'bedroom fan'
  },
  {
    value: 'down_lights',
    name: 'down lights'
  },
  {
    value: 'lounge_lights',
    name: 'lounge lights'
  },
  {
    value: 'sunrise_lights',
    name: 'sunrise lights'
  }
];

var states = [
  {
    value: 'true',
    state: true,
    description: 'on'
  },
  {
    value: 'false',
    state: false,
    description: 'off'
  }
]

function deviceAction (req) {
  var device = devices.find(device => device.value === req.body.result.parameters.devices);
  if(!device) {
    throw('device not found');
  }
  var state = states.find(state => state.value === req.body.result.parameters.state)
  if(!state) {
    throw('state not found');
    return;
  }
  deviceRepo.setDeviceState(device.value, state.state);
  var response = "Ok, setting " + device.name + " to " + state.description;
  return response;
}

module.exports = deviceAction;