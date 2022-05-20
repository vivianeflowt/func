import { camelCase } from 'lodash/fp';

/**
 * Formats the string in camelcase style the string
 * @category String
 * @param {string} str
 * @returns {string}
 */
export function toCamelCase(str: string): string {
  return camelCase(str);
}

export default toCamelCase;
