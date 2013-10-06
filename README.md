json-cov-to-lcov
=====================

Install
---------------------

  npm install

How to use
---------------------

  var jsoncovToLcov = require('json-cov-to-lcov');
  var lcov = jsoncovToLcov(jsonCovResult);

  console.log(lcov);

Test
---------------------

  npm install -g mocha mocha-lcov-reporter jscoverage
