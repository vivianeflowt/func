import { eq, every, map } from 'lodash/fp';
import { pipe } from 'lodash/fp';

import { PipeFunction, PredicateComparator } from '../types';

/**
 * Description placeholder
 * @category Comparability
 * @template T
 * @param {...PredicateComparator[]} args
 * @returns {(a: any) => (b: any) => (predicade: T) => T}
 */
export function ifElse<T>(
  ...args: PredicateComparator[]
): (a: any) => (b: any) => (predicade: T) => T {
  return (a: PipeFunction) =>
    (b: PipeFunction) =>
    (predicade: T): T => {
      return pipe(
        map((cond: PredicateComparator) => cond(predicade)),
        every(eq(true)),
      )(args)
        ? a(predicade)
        : b(predicade);
    };
}

export default ifElse;
