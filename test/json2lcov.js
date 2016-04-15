'use strict';

const fs = require('fs');
const path = require('path');
const jsoncovToLcov = require('../lib/json2lcov');

describe('json2lcov', function() {
  beforeEach(function() {
    return readFile('./test/fixtures/fixture.lcov').then((content) => {
      this.lcov = content.toString();
    });
  });

  it('converted into lcov from json-cov', function() {
    return readFile('./test/fixtures/fixture.json').then((content) => {
      const result = jsoncovToLcov( JSON.parse(content.toString()) );

      assert.equal(result, this.lcov);
    });
  });
});
