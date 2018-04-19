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
