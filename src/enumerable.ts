import {filter} from './filter';
import {map} from './map';

export class Enumerable {
  /**
   * Make this class as an iterable object.
   */
  *[Symbol.iterator]() {
    yield* this.iterator;
  }
  /**
   * @constructor
   * @param iterator
   * receives an iterable generator
   */ import;
  constructor(private iterator) {}

  filter<T>(predicate): T | Enumerable {
    this.iterator = filter(this.iterator(), predicate);
    return this;
  }

  map<T>(mapper): T | Enumerable {
    this.iterator = map(this.iterator(), mapper);
    return this;
  }
}
