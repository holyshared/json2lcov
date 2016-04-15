'use strict';

module.exports = function(result) {
  const files = result.files;
  const records = [];

  files.forEach((file, key) =>　{
    records.push(`SF:${file.filename}`);

    Object.keys(file.source).forEach((lineNumber, key) => {
      if (file.source[lineNumber].coverage === '') {
        return;
      }
      const coverage = file.source[lineNumber].coverage;

      records.push(`DA:${lineNumber},${coverage}`);
    });
    records.push('end_of_record');
  });

  records.push('');

  return records.join('\n');
};
