json2lcov
===============================================================

[![NPM version](https://badge.fury.io/js/json2lcov.svg)](http://badge.fury.io/js/json2lcov)
[![Build Status](https://travis-ci.org/holyshared/json2lcov.png?branch=master)](https://travis-ci.org/holyshared/json2lcov)
[![Coverage Status](https://coveralls.io/repos/holyshared/json2lcov/badge.svg?branch=master)](https://coveralls.io/r/holyshared/json2lcov?branch=master)
[![Dependency Status](https://gemnasium.com/holyshared/json2lcov.svg)](https://gemnasium.com/holyshared/json2lcov)
[![Stories in Ready](https://badge.waffle.io/holyshared/json2lcov.png?label=ready&title=Ready)](https://waffle.io/holyshared/json2lcov)

The report data of a **json-cov** format are changed into a **lcov** format.  
A conversion result is string.

Install
---------------------------------------------------------------------------------------------------------

	npm install json2lcov --save-dev

How to use
---------------------------------------------------------------------------------------------------------

	var jsoncovToLcov = require('json2lcov');
	var lcov = jsoncovToLcov(jsonCovResult);

	console.log(lcov);

UnitTest
---------------------------------------------------------------------------------------------------------

	npm install -g mocha mocha-lcov-reporter jscoverage
	npm install
	npm test
