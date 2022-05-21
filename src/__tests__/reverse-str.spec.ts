import reverseStr from '../lib/reverse-str';

test('reverseStr', () => {
  expect(reverseStr('abcde')).toEqual('edcba');
});
