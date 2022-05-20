import { eq, toString } from 'lodash/fp';

/**
 * Description placeholder
 * @category Comparability
 * @template A
 * @template B
 * @param {A} a
 * @returns {(b: B) => boolean}
 */
export function isLike<A, B>(a: A): (b: B) => boolean {
  return (b: B): boolean => {
    return eq(toString(a))(toString(b));
  };
}

export default isLike;
