import { entries, indexOf, isUndefined, map, pipe, reduce } from 'lodash/fp';

export function renameKeys(...from: string[]) {
  return (...to: string[]) =>
    (obj: Object) =>
      pipe(
        entries,
        map(([key, value]) => [
          indexOf(key)(from) >= 0 && !isUndefined(to[indexOf(key)(from)])
            ? to[indexOf(key)(from)]
            : key,
          value,
        ]),
        reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      )({ ...obj });
}

export default renameKeys;
