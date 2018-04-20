export function* every(iterator, threshold) {
  let result: boolean = true;
  for (const value of iterator) {
    if (!threshold(result, value)) {
      result = false;
    }
  }
  yield result;
}
