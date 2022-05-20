import f from 'lodash/fp';

import { List } from '../types';

export function autoSort<T extends string | number>(list: List<T>) {
  return [...list].sort((a, b) =>
    f.isNumber(a) && f.isNumber(b)
      ? a - b
      : (a as string).localeCompare(a as string),
  );
}

export default autoSort;
