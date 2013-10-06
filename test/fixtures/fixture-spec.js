'use strict';

var hello = require('./coverage/fixture');

describe('fixture', function(){

  it('hello', function(done){
    var result = hello();
    expect(result).to.equals('Hello!');
    done();
  });

});
