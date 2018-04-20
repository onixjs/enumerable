/**
 * @function every
 * @param iterator 
 * @param threshold 
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* every(iterator, threshold) {
  let result: boolean = true;
  for (const value of iterator) {
    if (!threshold(value)) {
      result = false;
    }
  }
  yield result;
}
