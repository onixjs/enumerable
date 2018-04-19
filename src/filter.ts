export function* filter(iterator, predicate) {
  for (const value of iterator) {
    if (predicate(value)) {
      yield value;
    }
  }
}
