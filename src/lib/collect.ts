import { concat } from 'lodash/fp';

export function collect(str: string, previous: string[]): string[] {
  return concat(previous)([str]);
}

export default collect;
