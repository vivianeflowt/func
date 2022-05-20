import { List } from '../types';

const { random, floor } = Math;

export function shuffleList<T>(list: List<T>) {
  return [...list]
    .map((item) => ({ item, sort: random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default shuffleList;
