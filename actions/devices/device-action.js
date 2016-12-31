
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
    state: true
  },
  {
    value: 'false',
    state: false
  }
]

function deviceAction (req, res) {
  console.log('calling device action HERE');
  var device = devices.find(device => device.value === req.body.result.parameters.devices);
  if(device) {
    console.log('device value =', device.value);
  } else {
    console.log('device not found');
  }
  var state = states.find(state => state.value === req.body.result.parameters.state)
  if(state) {
    console.log('state value =', state.value);
  } else {
    console.log('state not found');
  }
}

module.exports = deviceAction;