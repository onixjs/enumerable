export function* map(iterator, mapper) {
  for (const value of iterator) {
    yield mapper(value);
  }
}
