import { multiply, pipe, slice } from 'lodash/fp';

import { List } from '../types';

export function paginate<T>(size: number) {
  return (offset: number) => (list: List<T>) =>
    pipe(slice(multiply(size)(offset - 1), multiply(offset)(size)))([...list]);
}

export default paginate;
