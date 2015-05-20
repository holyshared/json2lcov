inputReport = ''
formatter = require './json2lcov'

process.stdin.resume();
process.stdin.setEncoding 'utf8'

process.stdin.on 'data', (chunk) ->
  inputReport += chunk

process.stdin.on 'end', () ->
  coverageResult = JSON.parse inputReport
  lcovResult = formatter(coverageResult)
  process.stdout.write lcovResult
