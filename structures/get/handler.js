var index  = require ('./index');

var event = {};

var context = {
  fail:    function (e)    { console.error (e); },
  succeed: function (data) { console.log (data); }
};

index.handler (event, context);
