/**
 * @function map
 * @param iterator 
 * @param mapper 
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* map(iterator, mapper) {
  for (const value of iterator) {
    yield mapper(value);
  }
}
