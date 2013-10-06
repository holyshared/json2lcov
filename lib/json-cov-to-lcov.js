'use strict';

module.exports = function jsoncovToLcov(jsonCovResult){

  var files = jsonCovResult.files,
      lcovResult = [],
      lineNumbers = [];

  files.forEach(function(file, key){

    lcovResult.push('SF:' + file.filename);
    lineNumbers = Object.keys(file.source);

    lineNumbers.forEach(function(lineNumber, key) {
      if (file.source[lineNumber].coverage === ""){
        return;
      }
      lcovResult.push('DA:' + lineNumber + ',' + file.source[lineNumber].coverage);
    });

    lcovResult.push('end_of_record');

  });

  lcovResult.push('');

  return lcovResult.join('\n');

}
