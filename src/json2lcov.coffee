module.exports = (result) ->
  files = result.files
  lcovResult = []
  lineNumbers = []

  files.forEach (file, key) ->
    lcovResult.push 'SF:' + file.filename
    lineNumbers = Object.keys file.source

    lineNumbers.forEach (lineNumber, key) ->
      if file.source[lineNumber].coverage == ''
        return

      coverage = file.source[lineNumber].coverage
      lcovResult.push 'DA:' + lineNumber + ',' + coverage
    lcovResult.push 'end_of_record'

  lcovResult.push ''
  lcovResult.join '\n'
