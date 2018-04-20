/**
 * @function include
 * @param iterator
 * @param criteria
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* includes(iterator, criteria) {
  let result: boolean = false;
  for (const value of iterator) {
    if (criteria === value) {
      result = true;
    }
  }
  yield result;
}
