/**
 * @function find
 * @param iterator
 * @param finder
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* find(iterator, finder) {
  for (const value of iterator) {
    if (finder(value)) {
      yield value;
      return;
    }
  }
  yield undefined;
}
