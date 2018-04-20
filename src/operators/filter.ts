/**
 * @function filter
 * @param iterator
 * @param predicate
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* filter(iterator, predicate) {
  for (const value of iterator) {
    if (predicate(value)) {
      yield value;
    }
  }
}
