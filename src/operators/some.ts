/**
 * @function some
 * @param iterator
 * @param threshold
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* some(iterator, threshold) {
  let result: boolean = false;
  for (const value of iterator) {
    if (threshold(value)) {
      result = true;
    }
  }
  yield result;
}
