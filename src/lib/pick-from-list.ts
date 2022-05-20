import { List } from '../types';

const { random, floor } = Math;

export function pickFromList<T>(list: List<T>) {
  return [...list][floor(random() * (list.length - 1))];
}

export default pickFromList;
