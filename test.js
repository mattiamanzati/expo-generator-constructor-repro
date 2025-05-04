const a = (function*() {
    return 1
  }).constructor
  const b = (function*(arg) {
    return arg
  }).constructor
  const c = (function*({ arg }) {
    return arg
  }).constructor
  print('a === b: ' + (a === b ? 'true' : 'false'))
  print('a === c: ' + (a === c ? 'true' : 'false'))
  print('b === c: ' + (b === c ? 'true' : 'false'))