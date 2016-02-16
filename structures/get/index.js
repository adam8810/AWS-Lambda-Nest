var Firebase = require ('firebase'),
    config   = require ('./config');

function handler (event, context) {
  var accessToken = config.access_token;

  var fb = new Firebase ('https://developer-api.nest.com/');
  fb.authWithCustomToken (accessToken, function (err, data) {
    if (err) { context.fail (err); }

    fb.child ('/structures').on ('value', function (snapshot) {
      var structures = snapshot.val ();
      return context.succeed (structures);
    });
  });
}

exports.handler = handler;
