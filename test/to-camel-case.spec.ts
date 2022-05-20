import toCamelCase from '../src/lib/to-camel-case';

test('toCamelCase', () => {
  expect(toCamelCase('test str')).toEqual('testStr');
});
