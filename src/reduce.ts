/**
 * @function reduce
 * @param iterator
 * @param reducer
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* reduce(iterator, reducer) {
  let result;
  for (const value of iterator) {
    if (result) {
      result = reducer(result, value);
    } else {
      result = value;
    }
  }
  yield result;
}
