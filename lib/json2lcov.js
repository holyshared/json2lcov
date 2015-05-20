module.exports = function(result) {
  var files, lcovResult, lineNumbers;
  files = result.files;
  lcovResult = [];
  lineNumbers = [];
  files.forEach(function(file, key) {
    lcovResult.push('SF:' + file.filename);
    lineNumbers = Object.keys(file.source);
    lineNumbers.forEach(function(lineNumber, key) {
      var coverage;
      if (file.source[lineNumber].coverage === '') {
        return;
      }
      coverage = file.source[lineNumber].coverage;
      return lcovResult.push('DA:' + lineNumber + ',' + coverage);
    });
    return lcovResult.push('end_of_record');
  });
  lcovResult.push('');
  return lcovResult.join('\n');
};

//# sourceMappingURL=../sourcemap/lib/json2lcov.js.map