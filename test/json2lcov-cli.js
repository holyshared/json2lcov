'use strict';

var fs = require('fs'),
    path = require('path'),
    exec = require('child_process').exec,
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

    var fixtureFile = path.resolve('./test/fixtures/fixture.json');

    exec('cat ' + fixtureFile + ' | ./bin/json2lcov.js',  function (error, stdout, stderr) {
      expect(stdout.toString()).to.equals(expectLcovContent);
      done();
    });

  });

});
