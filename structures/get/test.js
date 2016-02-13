var expect = require ('chai').expect,
    R      = require ('ramda'),
    index  = require ('./index');

var event = {};

describe ('Listing Structures', function () {
  it ('should return an array', function (done) {

    var context = {
      fail:    R.curry (function (e) { done (e); }),
      succeed: R.curry (function (data) {
        expect (data).to.be.an ('Array');
        done ();
      })
    };

    var result = index.handler (event, context);
  });
});
