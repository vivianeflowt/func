import reverseStr from '../src/lib/reverse-str';

test('reverseStr', () => {
  expect(reverseStr('abcde')).toEqual('edcba');
});
