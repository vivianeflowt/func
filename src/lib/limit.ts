import { slice } from 'lodash/fp';

import { List } from '../types';

export function limit<T>(count: number) {
  return (list: List<T>) => slice(0)(Math.abs(count))([...list]);
}

export default limit;
