import { List } from '../types';

export function randomFromList<T>(list: List<T>) {
  return [...list][Math.floor(Math.random() * (list.length - 1))];
}

export default randomFromList;
