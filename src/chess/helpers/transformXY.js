import parseTileName from './parseTileName'
import transformFile from './transformFile'
import transformRank from './transformRank'

/**
 * Transform tile to x, y
 * @param  {Object|string} tile
 * @return {Object}
 */
function transformXY (tile) {
  let nextTile

  if (typeof tile === 'string') {
    nextTile = parseTileName(tile)
  } else {
    nextTile = tile
  }

  const { file, rank } = nextTile

  return {
    x: transformFile(file),
    y: transformRank(rank)
  }
}

export default transformXY
