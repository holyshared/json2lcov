'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const jsoncovToLcov = require('../lib/json2lcov');

describe('json2lcov-cli', function() {
  beforeEach(function() {
    return readFile('./test/fixtures/fixture.lcov').then((content) => {
      this.lcov = content.toString();
    });
  });

  it('converted into lcov from json-cov', function(done) {
    const fixtureFile = path.resolve('./test/fixtures/fixture.json');

    exec('cat ' + fixtureFile + ' | ./bin/json2lcov.js', (error, stdout, stderr) => {
      assert.equal(stdout.toString(), this.lcov);
      done();
    });
  });
});
