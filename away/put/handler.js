var index  = require ('./index'),
    config = require ('./config');

var event = {
  "structureId": config.structure_id,
  "away": process.argv[2] || "home"
};

var context = {
  fail: function (e) { console.error (e); },
  succeed: function (data) { console.log (data); }
};

index.handler (event, context);
