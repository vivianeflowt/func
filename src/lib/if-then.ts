import { eq, every, map, pipe } from 'lodash/fp';

import { PipeFunction, PredicateComparator } from '../types';

/**
 * Description placeholder
 * @category Comparability
 * @template T
 * @template R
 * @param {...PredicateComparator[]} args
 * @returns {(a: any) => (predicade: T) => T}
 */
export function ifThen<T, R>(
  ...args: PredicateComparator[]
): (a: any) => (predicade: T) => T {
  return (a: PipeFunction) =>
    (predicade: T): T => {
      return pipe(
        map((cond: PredicateComparator) => cond(predicade)),
        every(eq(true)),
      )(args)
        ? a(predicade)
        : predicade;
    };
}

export default ifThen;
