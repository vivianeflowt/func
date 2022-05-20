import { pipe, reduce, reverse, values } from 'lodash/fp';

import { List } from '../types';

export function uniqueByKey<T extends Object>(predicate: string) {
  return (list: List<T>) =>
    pipe(
      reverse,
      reduce((acc, cur) => ({ ...acc, [cur[predicate]]: cur }), {}),
      values,
    )([...list]);
}

export default uniqueByKey;
