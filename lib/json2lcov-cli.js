'use strict';

let report = '';
const formatter = require('./json2lcov');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => report += chunk);
process.stdin.on('end', () => {
  const result = formatter( JSON.parse(report) );
  process.stdout.write(result);
});
