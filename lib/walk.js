'use strict'

module.exports = function walk(tree, path) {
  let leaf = tree

  for (let step of path) {
    if (Number.isInteger(step) || step === 'childNodes') {
      leaf = leaf[step]
    } else {
      break
    }
  }

  return leaf
}
