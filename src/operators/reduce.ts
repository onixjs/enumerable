/**
 * @function reduce
 * @param iterator
 * @param reducer
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* reduce(iterator, reducer) {
  let acumulator;
  for (const value of iterator) {
    if (acumulator) {
      acumulator = reducer(acumulator, value);
    } else {
      acumulator = value;
    }
  }
  yield acumulator;
}
