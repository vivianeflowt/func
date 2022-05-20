import { concat } from 'lodash/fp';

/**
 * Description placeholder
 * @category Comparability
 * @param {string} str
 * @param {string[]} previous
 * @returns {string[]}
 */
export function collect(str: string, previous: string[]): string[] {
  return concat(previous)([str]);
}

export default collect;
