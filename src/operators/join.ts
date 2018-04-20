/**
 * @function join
 * @param iterator
 * @param separator
 * @author Jonathan Casarrubias
 * @license MIT
 */
export function* join(iterator, separator) {
  let acumulator: string = '';
  for (const value of iterator) {
    if (acumulator !== '') {
      acumulator = `${acumulator}${separator}${value}`;
    } else {
      acumulator = value;
    }
  }
  yield acumulator;
}
