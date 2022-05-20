import f from 'lodash/fp';

import ifElse from '../src/lib/if-else';

test('ifElse', () => {
  expect(ifElse(f.lte(3))(f.add(1))(f.add(2))(2)).toEqual(4);
  expect(ifElse(f.gte(3))(f.add(1))(f.add(2))(4)).toEqual(6);
  expect(ifElse(f.isNumber)(f.add(1))(f.add(2))(1)).toEqual(2);
});
