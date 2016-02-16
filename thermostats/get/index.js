var Firebase = require ('firebase'),
    config   = require ('./config');

function handler (event, context) {
  var accessToken = config.access_token;
  var thermostatId = event.thermostatId;

  var fb = new Firebase ('https://developer-api.nest.com/');
  fb.authWithCustomToken (accessToken, function (err, data) {
    if (err) { context.fail (err); }

    fb.child ('/devices/thermostats/' + thermostatId).on ('value', function (snapshot) {
      var thermostats = snapshot.val ();
      return context.succeed (thermostats);
    });
  });
}

exports.handler = handler;
