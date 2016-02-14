var Firebase = require ('firebase'),
    config   = require ('./config');

function handler (event, context) {
  var accessToken = config.access_token;
  var awayState   = event.away;
  var structureId = event.structureId;
   
  if (!awayState || (awayState !== 'home' && awayState !== 'away')) {
    return context.fail ('Invalid Away State');
  }

  if (!structureId) {
    return context.fail ('Invalid StructureId');
  }

  var fb = new Firebase ('https://developer-api.nest.com/');
  fb.authWithCustomToken (accessToken, function (err, data) {
    if (err) { context.fail (err); }

    var awayStateRef = fb.child ('/structures/' + structureId + '/away');

    awayStateRef.set (awayState, function (err) {
      if (err) { return context.fail (err.message); }
      return context.succeed (awayState);
    });
  });
}

exports.handler = handler;
