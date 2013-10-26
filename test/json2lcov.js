'use strict';

var fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect,
    jsoncovToLcov = require('../lib/json2lcov');

describe('json2lcov', function(){

  var expectLcovContent = '';

  beforeEach(function(done){
    fs.readFile( path.resolve('./test/fixtures/fixture.lcov'), function (error, content) {
      expectLcovContent = content.toString();
      done();
    });
  });

  it('converted into lcov from json-cov', function(done){

    fs.readFile( path.resolve('./test/fixtures/fixture.json'), function (error, content) {

      if (error) {
        throw error;
      }

      var result = jsoncovToLcov( JSON.parse(content.toString()) );
      expect(result).to.equals(expectLcovContent);
      done();

    });

  });

});
