import { List } from '../types';

export function uniqueObject<T extends Object>(list: List<T>) {
  return [
    ...new Set(
      [...list]
        .map((item) => JSON.stringify(item))
        .map((str: string) => JSON.parse(str)),
    ),
  ];
}

export default uniqueObject;
