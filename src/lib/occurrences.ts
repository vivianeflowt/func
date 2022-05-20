import { reduce } from 'lodash/fp';

import { List } from '../types';

export function occurrences<T>(value: T) {
  return (list: List<T>) =>
    reduce((acc, cur) => (cur === value ? acc + 1 : acc), 0)([...list]);
}

export default occurrences;
