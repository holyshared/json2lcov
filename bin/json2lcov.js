#!/usr/bin/env node

var inputReport = '',
    jsoncovToLcov = require('../lib/json2lcov');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  inputReport += chunk;
});

process.stdin.on('end', function() {
  var lcovResult = '',
      coverageResult = JSON.parse(inputReport);

  lcovResult = jsoncovToLcov(coverageResult);

  process.stdout.write(lcovResult);
});
