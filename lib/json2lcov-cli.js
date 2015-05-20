var formatter, inputReport;

inputReport = '';

formatter = require('./json2lcov');

process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  return inputReport += chunk;
});

process.stdin.on('end', function() {
  var coverageResult, lcovResult;
  coverageResult = JSON.parse(inputReport);
  lcovResult = formatter(coverageResult);
  return process.stdout.write(lcovResult);
});

//# sourceMappingURL=../sourcemap/lib/json2lcov-cli.js.map