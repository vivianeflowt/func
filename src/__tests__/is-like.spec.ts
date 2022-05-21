import isLike from '../lib/is-like';

test('isLike', () => {
  expect(isLike(1)(1)).toEqual(true);
  expect(isLike(1)('1')).toEqual(true);
  expect(isLike(1)(2)).toEqual(false);
});
