var index  = require ('./index'),
    config = require ('./config');

var event = {
  thermostatId: config.thermostatId
};

var context = {
  fail:    function (e)    { console.error (e); },
  succeed: function (data) { console.log (data); }
};

index.handler (event, context);
