json-cov-to-lcov
===============================================================

[![Build Status](https://travis-ci.org/holyshared/json-cov-to-lcov.png?branch=master)](https://travis-ci.org/holyshared/json-cov-to-lcov)
[![Coverage Status](https://coveralls.io/repos/holyshared/json-cov-to-lcov/badge.png?branch=master)](https://coveralls.io/r/holyshared/json-cov-to-lcov?branch=master)

The report data of a **json-cov** format are changed into a **lcov** format.  
A conversion result is string.

Install
---------------------------------------------------------------------------------------------------------

	npm install json-cov-to-lcov --save-dev

How to use
---------------------------------------------------------------------------------------------------------

	var jsoncovToLcov = require('json-cov-to-lcov');
	var lcov = jsoncovToLcov(jsonCovResult);

	console.log(lcov);

UnitTest
---------------------------------------------------------------------------------------------------------

	npm install -g mocha mocha-lcov-reporter jscoverage
	npm install
	mocha --reporter spec
