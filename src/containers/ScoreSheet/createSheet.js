import memoize from 'memoize-one'
import * as R from 'ramda'
import { createNotation, createScoreSheet, createTimeline } from 'cavallo'

function createSheet (snapshot, past) {
  return R.compose(
    createScoreSheet,
    R.reverse,
    createNotation,
    createTimeline(snapshot)
  )(past)
}

export default memoize(createSheet)
