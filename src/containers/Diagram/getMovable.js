import memoize from 'memoize-one'
import * as R from 'ramda'
import { getNextMovable } from 'cavallo'
import { lazy } from '~/utils'

// no extra rendering when clicking same Chess piece
const getMovable = R.compose(
  getNextMovable('tiles'),
  lazy
)

export default memoize(getMovable, R.equals)
