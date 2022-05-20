import { gte, isNumber, isString, multiply, toUpper } from 'lodash/fp';

import ifThen from '../src/lib/if-then';

test('ifThen', () => {
  expect(ifThen(isNumber, gte(10))(multiply(2))(9)).toEqual(18);
  expect(ifThen(isString)(toUpper)('abc')).toEqual('ABC');
  expect(ifThen(isString)(toUpper)(1)).toEqual(1);
});
