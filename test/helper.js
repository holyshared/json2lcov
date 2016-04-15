'use strict';

const fs = require('fs');

global.Promise = require('bluebird');
global.readFile = Promise.promisify(fs.readFile);
global.assert = require('power-assert');
